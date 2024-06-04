import { Box, Typography, styled, Button } from "@mui/material";
import NameSlide from "../Components/NameSlide";
import { useNavigate, useParams } from "react-router-dom";
import AccountProvider from "../context/AccountProvider";
import Appbar from "../Components/Appbar";
import { AccountContext } from "../context/AccountProvider";
import { useCallback, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { deleteUserFromLobby } from "../service/lobbyApi";
import axios from "axios";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { updateUserRecent } from "../service/api";
import { useTranslation } from "react-i18next";

const url = `${import.meta.env.VITE_API_URL}`;

const BackPart = styled(Box)`
  position: absolute;
  width: 1150px;
  height: 55px;
  left: 200px;
  top: 10.5rem;
  background: #c8d8f0;
  border-radius: 20px;
  display: flex;
`;

const FrontBox = styled(Box)`
  position: relative;
  margin: 0 0.3em auto;
  width: 250px;
  height: 40px;
  left: 10px;
  top: 7.5px;
  background: #747487;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Timer = styled(Box)`
  position: relative;
  margin: 0 0.3rem auto;
  width: 200px;
  height: 40px;
  left: 13.5rem;
  top: 7.5px;
  background: #747487;
  border-radius: 50px;
`;

const Text = styled(Typography)`
  position: relative;
  width: 280px;
  height: 51px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: #ffffff;
  text-transform: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TimerText = styled(Typography)`
  margin: 0 auto;
  position: relative;
  padding-left: 3.6rem;
  padding-top: 0.6rem;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: #ffffff;
`;

const Start = styled(Button)`
  position: absolute;
  width: 12rem;
  height: 3rem;
  left: 20rem;
  top: 32.5rem;
  border-radius: 50px;
`;

const End = styled(Button)`
  position: absolute;
  width: 12rem;
  height: 3rem;
  right: 23rem;
  top: 32.5rem;
  border-radius: 50px;
`;

function BarCat() {
  const { language, topicHeader, topic, lobbyId } = useParams();
  const { isAuthenticated } = useAuth0();
  const account = useContext(AccountContext);
  const { currentUser, loading } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const [lobby, setLobby] = useState({});
  const { t } = useTranslation();
  useEffect(() => {
    const getLobby = async () => {
      try {
        const response = await axios.get(`${url}/api/lobbies/${lobbyId}`);
        setLobby(response.data);
      } catch (error) {
        console.log("error while calling getLobbies api", error.message);
      }
    };
    getLobby();

    const interval = setInterval(getLobby, 3000); // Poll every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [lobbyId]);

  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault();
      event.stopPropagation();
      // Perform your custom logic here
      window.alert("Click on the End button for Navigation to Previous Page.");
      return false; // Prevent navigation
    };

    window.history.pushState(null, "", window.location.pathname);
    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  const handleEndNow = useCallback(() => {
    const data = {
      lobbyId: lobbyId,
      email: currentUser.email,
      hasMeetingStarted: false,
    };

    const pullUser = async () => {
      await deleteUserFromLobby(data);
    };
    pullUser();

    navigate("/existsession");
  }, [lobbyId, navigate, currentUser]);

  const handleJoinRoom = useCallback(() => {
    if (!(lobby.countUser > 1 || lobby.hasMeetingStarted === true)) {
      alert(
        "You can't enter the meeting as number of user is 1 or meeting has not started yet!"
      );
      return;
    }

    const rec = {
      email: currentUser.email,
      recent: `/room/${language}/${topicHeader}/${topic}/${lobbyId}`,
    };

    const updateRecent = async () => {
      await updateUserRecent(rec);
    };

    const data = {
      lobbyId: lobbyId,
      email: currentUser.email,
      hasMeetingStarted: true,
    };

    const pullUser = async () => {
      await deleteUserFromLobby(data);
    };

    updateRecent();
    pullUser();

    navigate(`/room/${language}/${topicHeader}/${topic}/${lobbyId}`);
    window.location.reload();
  }, [
    lobby.countUser,
    lobby.hasMeetingStarted,
    currentUser.email,
    language,
    topicHeader,
    topic,
    lobbyId,
    navigate,
  ]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated || !currentUser) {
    return <div>No user data available</div>;
  }

  if (lobby?.hasMeetingStarted === true) {
    return (
      <>
        <AccountProvider>
          <Appbar account={account} />
        </AccountProvider>
        <Box
          sx={{
            position: "relative",
            top: "7rem",
            marginLeft: "27rem",
            borderRadius: "25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#EEAF8B",
            width: "40rem",
            height: "2rem",
          }}
        >
          <Typography>{t("mhs")}</Typography>
        </Box>

        <BackPart>
          <FrontBox>
            <Text>{topicHeader}</Text>
          </FrontBox>
          <FrontBox sx={{ width: "450px" }}>
            <Text sx={{ width: "400px" }}>{topic}</Text>
          </FrontBox>
          <Timer>
            <TimerText>
              <TimerText>{language}</TimerText>
            </TimerText>
          </Timer>
        </BackPart>
        <NameSlide lobby={lobby} />
        <Start variant="contained" onClick={handleJoinRoom} color="success">
          <Text>{t("start")}</Text>
        </Start>
        <End variant="contained" onClick={handleEndNow} color="error">
          <Text>{t("end")}</Text>
        </End>
      </>
    );
  }

  return (
    <>
      <AccountProvider>
        <Appbar account={account} />
      </AccountProvider>
      <BackPart>
        <FrontBox>
          <Text>{topicHeader}</Text>
        </FrontBox>
        <FrontBox sx={{ width: "450px" }}>
          <Text sx={{ width: "400px" }}>{topic}</Text>
        </FrontBox>
        <Timer>
          <TimerText>{language}</TimerText>
        </Timer>
      </BackPart>
      <NameSlide lobby={lobby} />
      <Start variant="contained" onClick={handleJoinRoom} color="success">
        <Text>{t("start")}</Text>
      </Start>
      <End variant="contained" onClick={handleEndNow} color="error">
        <Text>{t("end")}</Text>
      </End>
    </>
  );
}

export default BarCat;
