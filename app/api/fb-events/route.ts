import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return new NextResponse(null, { status: 405, statusText: 'Method Not Allowed' });
  }

  try {
    const { event_name, user_data, custom_data, event_id, event_source_url } = await req.json();

    const payload = {
      data: [
        {
          event_name: event_name || "Lead",
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_id,
          event_source_url: event_source_url || req.headers.get('referer'),
          user_data: {
            ...user_data,
            client_user_agent: req.headers.get("user-agent"),
            client_ip_address: req.headers.get("x-forwarded-for") || req.ip,
          },
          custom_data,
        },
      ],
    };

    const pixelId = process.env.FB_PIXEL_ID;
    const accessToken = process.env.FB_ACCESS_TOKEN;

    if (!pixelId || !accessToken) {
      throw new Error('Facebook Pixel ID or Access Token is not configured.');
    }

    const url = `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`;

    const fbRes = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const fbData = await fbRes.json();

    if (!fbRes.ok) {
      console.error('Facebook API Error:', fbData);
      return new NextResponse(JSON.stringify(fbData), { status: fbRes.status });
    }

    return new NextResponse(JSON.stringify(fbData), { status: 200 });

  } catch (error) {
    console.error('Internal Server Error:', error);
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
