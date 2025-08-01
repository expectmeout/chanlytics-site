/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
  
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { sendFbEvent } from '@/lib/fb-events';

export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"25min"});
      cal("on", {
        action: "bookingSuccessful",
        callback: (e: CustomEvent) => {
          const { detail } = e;
          if (detail && detail.data && detail.data.email) {
            sendFbEvent({
              eventName: 'Schedule',
              userData: {
                em: detail.data.email,
                fn: detail.data.name,
              },
            });
          }
        }
      });
      cal("ui", {"hideEventTypeDetails":true,"layout":"month_view"});
    })();
  }, []);

  return (
    <div className="mt-12">
      <Cal 
        namespace="25min"
        calLink="chanlytics/25min"
        style={{width:"100%",height:"100%",overflow:"scroll"}}
        config={{"layout":"month_view"}}
      />
    </div>
  );
};
  