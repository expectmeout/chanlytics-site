'use client'

import React, { useEffect } from 'react';

export default function BookingCalendar() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "http://schedule.chanlytics.com/embed/embed.js", "init");
      Cal("init", "25min", {origin:"http://schedule.chanlytics.com"});

      Cal.ns["25min"]("inline", {
        elementOrSelector:"#my-cal-inline",
        config: {"layout":"month_view"},
        calLink: "schedule/25min",
      });

      Cal.ns["25min"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#18181B"},"dark":{"cal-brand":"#fafafa"}},"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      // Cleanup Cal instance if needed
    };
  }, []);

  return (
    <div className="mt-10" id="booking-calendar-container">
      {/* Target div for the inline embed */}
      <div style={{width:'100%', height:'100%', overflow:'scroll'}} id="my-cal-inline"></div>
    </div>
  );
}
