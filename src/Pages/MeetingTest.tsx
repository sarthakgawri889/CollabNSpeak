import Loader from "../Components/Loader";
import {
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import React from "react";
import MeetingSetup from "../Components/MeetingSetup";
import MeetingRoom from "../Components/MeetingRoom";
import { tokenProvider } from "../../actions/stream.actions";
import { useAuth0 } from "@auth0/auth0-react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const MeetingTest = () => {
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { user, isLoading } = useAuth0();
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();

  useEffect(() => {
    if (isLoading || !user) return;
    if (!apiKey) throw new Error("Stream API key is missing");

    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user?.sub + "",
        name: user?.name + "",
        image: user?.picture + "",
      },
      tokenProvider,
    });

    setVideoClient(client);
  }, [user, isLoading]);

  if (!videoClient) return <Loader />;

  const id = crypto.randomUUID();
  const call = videoClient?.call("default", id);
  call.join({ create: true });

  if (!videoClient) return <Loader />;

  return (
    <StreamVideo client={videoClient}>
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetUpComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </StreamVideo>
  );
};

export default MeetingTest;
