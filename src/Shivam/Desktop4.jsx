import { Paper } from "@mui/material";
import Appbar from "./Appbar";
import Session from "./Session";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

function Desktop4() {
  const theme = useTheme();

  const StyledPaper = styled(Paper)(() => ({
    width: "75rem",
    height: "28rem",
    backgroundColor: theme.palette.bg.main,
    boxShadow: 0,
    borderRadius: "25px",
    position: "relative",
    top: "14rem",
    margin: "auto",
    paddingTop: "0.3rem",
  }));

  return (
    <div>
      <Appbar />
      <StyledPaper elevation={2}>
        <Session />
        <Session />
        <Session />
        <Session />
        <Session />
        <Session />
      </StyledPaper>
    </div>
  );
}

export default Desktop4;
