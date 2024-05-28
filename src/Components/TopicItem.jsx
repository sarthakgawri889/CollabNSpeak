import { useAuth0 } from "@auth0/auth0-react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Card, Typography } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { createLobby } from "../service/lobbyApi";

function TopicItem({ topicHeader, topic, language }) {
  const theme = useTheme();
  const { user } = useAuth0();

  const CustomCard = styled(Card)(() => ({
    height: "3.5rem",
    width: "15rem",
    backgroundColor: theme.palette.gray.main,
    borderRadius: "10px",
    margin: "1.4rem 1.5rem 1.4rem 1.5rem",
    textAlign: "center",
    "&:hover": {
      cursor: "pointer",
      boxShadow: theme.shadows[10],
      transform: "scale(1.02)",
      transition: "transform 0.2s ease-in-out",
    },
  }));

  const CardContent = styled(Typography)(() => ({
    paddingTop: "15px",
    fontFamily: "Montserrat",
    fontWeight: "100",
    fontSize: "12px",
    letterSpacing: "1px",
  }));

  const navigate = useNavigate();
  const lobbyId = crypto.randomUUID();

  const handleClick = useCallback(() => {
    if (language === "") {
      alert("Please select the language before creating the lobby");
      return;
    }

    const lobby = {
      lobbyId: lobbyId,
      topicHeader: topicHeader,
      topicName: topic,
      language: language,
      userCount: 1,
      hasMeetingStarted: false,
      users: [{ name: user?.name, email: user?.email, picture: user?.picture }],
    };
    const addLobby = async () => {
      await createLobby(lobby);
    };
    addLobby();
    navigate(`/barcat/${language}/${topicHeader}/${topic}/${lobbyId}`);
  }, [
    language,
    lobbyId,
    navigate,
    topic,
    topicHeader,
    user?.email,
    user?.name,
    user?.picture,
  ]);

  return (
    <CustomCard>
      <CardContent color="white" onClick={handleClick}>
        {topic}
      </CardContent>
    </CustomCard>
  );
}

export default TopicItem;
