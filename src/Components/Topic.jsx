import { Card } from "@mui/material";
import TopicItem from "./TopicItem";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

function Topic() {
  const theme = useTheme();

  const CustomCard = styled(Card)(() => ({
    height: "21rem",
    width: "18rem",
    backgroundColor: theme.palette.bg.main,
    margin: "1rem",
    borderRadius: "12px",
  }));

  return (
    <div>
      <CustomCard sx={{ boxShadow: 0 }}>
        <TopicItem />
        <TopicItem />
        <TopicItem />
        <TopicItem />
      </CustomCard>
    </div>
  );
}

export default Topic;
