// components/ZoomMeeting.tsx
import React, { useState } from "react";
import ZoomMtgEmbedded from "@zoom/meetingsdk/embedded";
import customFetch from "@/utils/fetchUtils";

interface ZoomMeetingProps {
  meetingNumber?: string;
  userName?: string;
}

const ZoomMeeting: React.FC<ZoomMeetingProps> = ({
  meetingNumber = "88434450302",
  userName = "React User",
}) => {
  const [client] = useState(() => ZoomMtgEmbedded.createClient());

  const getSignature = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    try {
      const response = await customFetch(
        `/api/getZoomJwt?meetingNumber=${meetingNumber}`,
      );
      const { signature, sdkKey } = await response.json();
      startMeeting(signature, sdkKey);
    } catch (error) {
      console.error("Error getting JWT for Zoom", error);
    }
  };

  const startMeeting = (signature: string, sdkKey: string) => {
    let meetingSDKElement = document.getElementById("meetingSDKElement");
    if (!meetingSDKElement) return;

    client
      .init({
        zoomAppRoot: meetingSDKElement,
        language: "en-US",
      })
      .then(() => {
        client.join({
          signature,
          meetingNumber,
          userName,
          password: "eGXsGO15II6lWJSd3fEQKywwE8q9Ng.1",
          sdkKey,
          success: (success: any) => {
            console.log(success);
          },
          error: (error: any) => {
            console.log(error);
          },
        });
      })
      .catch((error) =>
        console.error("Error initializing the meeting:", error),
      );
  };

  return (
    <div>
      <div
        id="meetingSDKElement"
        style={{ width: "100%", height: "500px" }}
      ></div>
      <button onClick={getSignature}>Join Meeting</button>
    </div>
  );
};

export default ZoomMeeting;
