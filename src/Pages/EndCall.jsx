import React from "react";
import Appbar from "../Components/Appbar";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EndCall = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <Appbar />
      <div
        style={{
          width: "470px",
          height: "290px",
          margin: "auto",
          marginTop: "200px",
          background: "#e1ebf9",
          color: "#262626",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          borderRadius: "15px",
          padding: "20px 25px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontSize: "20px",
            fontWeight: "700",
            paddingBottom: "1rem",
          }}
        >
          Your Meeting has ended!!
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: "700",
            paddingBottom: "1rem",
          }}
        >
          kindly go to homepage to create new session 😊
        </Typography>

        <Button
          sx={{
            position: "relative",
            top: "1rem",
            width: "200px",
            height: "50px",
          }}
          variant="contained"
          color="success"
          onClick={handleClick}
        >
          Go to Home
        </Button>
      </div>
    </>
  );
};

export default EndCall;
