import React, { useContext } from "react";
import Appbar from "../Components/Appbar";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { useAuth0 } from "@auth0/auth0-react";

const RecentMeeting = () => {
  const navigate = useNavigate();
  const { currentUser, loading } = useContext(CurrentUserContext);
  const { isAuthenticated } = useAuth0();

  const handleClick = () => {
    navigate(currentUser.recent);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated || !currentUser) {
    return <div>No user data available</div>;
  }

  return (
    <div>
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
            Left your meeting due to Issues?😢
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "700",
              paddingBottom: "1rem",
            }}
          >
            Click this button to join the meeting you left😊
          </Typography>

          {currentUser.recent != "link" ? (
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
              Join Meeting
            </Button>
          ) : (
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: "700",
                paddingBottom: "1rem",
              }}
            >
              No Recent Meeting
            </Typography>
          )}
        </div>
      </>
    </div>
  );
};

export default RecentMeeting;
