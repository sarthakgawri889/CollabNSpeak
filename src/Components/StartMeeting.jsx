import { Button } from "@mui/material";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const StartMeeting = ({ text }) => {
  const navigate = useNavigate();
  const rootId = crypto.randomUUID();

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${rootId}`);
  }, [navigate, rootId]);

  return (
    <div>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#2D8CFF", borderRadius: "" }}
        onClick={handleJoinRoom}
      >
        {text}
      </Button>
    </div>
  );
};

export default StartMeeting;
