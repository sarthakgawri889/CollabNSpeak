import {
  CallControls,
  CallingState,
  PaginatedGridLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { Container } from "@mui/material";
import React from "react";

import Loader from "./Loader";

const MeetingRoom = () => {
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) return <Loader />;

  return (
    <>
      <Container
        sx={{
          position: "relative",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          paddingTop: 4,
          color: "white",
        }}
      >
        <Container
          sx={{
            position: "relative",
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container
            sx={{
              display: "flex",
              width: "100%",
              maxWidth: "1000px",
              alignItems: "center",
            }}
          >
            <PaginatedGridLayout />
          </Container>
        </Container>

        <Container
          sx={{
            position: "fixed",
            bottom: 0,
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
            flexWrap: "wrap",
          }}
        >
          <CallControls />
        </Container>
      </Container>
    </>
  );
};

export default MeetingRoom;
