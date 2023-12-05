import { Box, styled, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Frame = styled(Box)`
  position: absolute;
  width: 65rem;
  height: 29rem;
  left: 15rem;
  top: 6.5rem;
  background: #c8d8f0;
  border-radius: 25px;
`;

const Leave = styled(Button)`
  position: absolute;
  width: 301px;
  height: 68px;
  left: 1034px;
  top: 37.5rem;
  background: #2d8cff;
  border-radius: 50px;
`;

function VideoCall() {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  return (
    <>
      <Frame></Frame>
      <Leave variant="contained" onClick={back}>
        Leave Meeting
      </Leave>
    </>
  );
}

export default VideoCall;
