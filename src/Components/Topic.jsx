import { Card } from "@mui/material";
import TopicItem from "./TopicItem";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Debate, GroupDiscussion, Icebreaker } from "../service/TopicDetail";

function Topic({ topicHeader, language }) {
  const theme = useTheme();

  const CustomCard = styled(Card)(() => ({
    height: "21rem",
    width: "18rem",
    backgroundColor: theme.palette.bg.main,
    margin: "1rem",
    borderRadius: "12px",
  }));

  if (topicHeader === "Icebreaker") {
    return (
      <CustomCard
        sx={{
          boxShadow: "0",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {Icebreaker.map((item) => {
          return (
            <TopicItem
              topicHeader={topicHeader}
              topic={item.topic}
              language={language}
            />
          );
        })}
      </CustomCard>
    );
  } else if (topicHeader === "Debate") {
    return (
      <CustomCard
        sx={{
          boxShadow: "0",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {Debate.map((item) => {
          return (
            <TopicItem
              topicHeader={topicHeader}
              topic={item.topic}
              language={language}
            />
          );
        })}
      </CustomCard>
    );
  }

  return (
    <div>
      <CustomCard
        sx={{
          boxShadow: "0",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {GroupDiscussion.map((item) => {
          return (
            <TopicItem
              topicHeader={topicHeader}
              topic={item.topic}
              language={language}
            />
          );
        })}
      </CustomCard>
    </div>
  );
}

export default Topic;
