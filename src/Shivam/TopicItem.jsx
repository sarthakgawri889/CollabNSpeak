import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Card, Typography } from "@mui/material";

function TopicItem() {
  const theme = useTheme();

  const CustomCard = styled(Card)(() => ({
    height: "3.5rem",
    width: "15rem",
    backgroundColor: theme.palette.gray.main,
    borderRadius: "10px",
    margin: "1.4rem 1.5rem 1.4rem 1.5rem",
    textAlign: "center",
  }));

  const CardContent = styled(Typography)(() => ({
    paddingTop: "15px",
    fontFamily: "Montserrat",
    fontWeight: "100",
    fontSize: "15px",
    letterSpacing: "1px",
  }));

  return (
    <CustomCard>
      <CardContent color="white">Topic</CardContent>
    </CustomCard>
  );
}

export default TopicItem;
