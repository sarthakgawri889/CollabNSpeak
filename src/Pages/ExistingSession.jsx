import { Paper } from "@mui/material";
import Appbar from "../Components/Appbar";
import Session from "../Components/Session";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import AccountProvider from "../context/AccountProvider";

function ExistingSession() {

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
      <AccountProvider>
        <Appbar/>
      </AccountProvider>
     
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

export default ExistingSession;
