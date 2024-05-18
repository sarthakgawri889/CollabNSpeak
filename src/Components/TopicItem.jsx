import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function TopicItem({ topicHeader, topic }) {
  const theme = useTheme();

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

  const navigateToLobby = () => {
    navigate(`/barcat/${topicHeader}/${topic}/${lobbyId}`);
  };

  return (
    <CustomCard onClick={navigateToLobby}>
      <CardContent color="white">{topic}</CardContent>
    </CustomCard>
  );
}

export default TopicItem;
