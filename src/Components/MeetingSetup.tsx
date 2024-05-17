import { VideoPreview, useCall } from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button, Checkbox, Container, Typography } from "@mui/material";

const MeetingSetup = ({
  setIsSetUpComplete,
}: {
  setIsSetUpComplete: (value: boolean) => void;
}) => {
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);
  const call = useCall();

  if (!call) {
    throw new Error("useCall must be called within StreamCall component");
  }

  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggledOn, call?.camera, call?.microphone]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "3rem",
        height: "100vh",
        width: "100%",
        color: "white",
      }}
    >
      <Typography sx={{ fontWeight: "bold", fontSize: "2.25rem" }}>
        Setup
      </Typography>
      <VideoPreview />

      <Container
        sx={{
          display: "flex",
          height: "4rem",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.75rem",
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            fontWeight: "medium",
          }}
        >
          <Checkbox
            checked={isMicCamToggledOn}
            onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
          />
          Join with mic and camera off
        </Container>
      </Container>
      <Button
        sx={{
          borderRadius: "0.375rem",
          backgroundColor: "#34D399",
          paddingX: "1rem",
          paddingY: "0.625rem",
        }}
        onClick={() => {
          call.join();
          setIsSetUpComplete(true);
        }}
      >
        Join Meeting
      </Button>
    </Container>
  );
};

export default MeetingSetup;
