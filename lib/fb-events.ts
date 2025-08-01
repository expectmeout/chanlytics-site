import sha256 from 'crypto-js/sha256';

interface UserData {
  em?: string;
  ph?: string;
  fn?: string;
  ln?: string;
  // Add other user data fields as needed
}

interface EventData {
  eventName: string;
  eventId?: string;
  eventSourceUrl?: string;
  userData: UserData;
  customData?: Record<string, any>;
}

// Function to hash user data
const hashData = (data: string | undefined | null): string | null => {
  if (!data) return null;
  return sha256(data.toLowerCase()).toString();
};

export const sendFbEvent = async ({ eventName, eventId, eventSourceUrl, userData, customData }: EventData): Promise<void> => {
  try {
    const hashedUserData = {
      em: hashData(userData.em),
      ph: hashData(userData.ph),
      fn: hashData(userData.fn),
      ln: hashData(userData.ln),
    };

    await fetch('/api/fb-events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event_name: eventName,
        event_id: eventId,
        event_source_url: eventSourceUrl || window.location.href,
        user_data: hashedUserData,
        custom_data: customData,
      }),
    });
  } catch (error) {
    console.error('Failed to send Facebook event', error);
  }
};
