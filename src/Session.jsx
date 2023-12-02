import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Avatar, Box, Button, Paper, Typography } from "@mui/material";

function Session() {
  const theme = useTheme();

  const StyledPaper = styled(Paper)(() => ({
    backgroundColor: theme.palette.gray.main,
    display: "flex",
    width: "70rem",
    height: "3.5rem",
    alignItems: "center",
    paddingLeft: "2rem",
    margin: "0.8rem 1rem 1rem 1.5rem",
  }));

  const StyledButton = styled(Button)(() => ({
    height: "2rem",
    borderRadius: "25px",
    margin: "1.5rem 2rem 1.5rem 2rem",
  }));

  const ButtonText = styled(Typography)(() => ({
    fontFamily: "Montserrat",
    fontWeight: "400",
    textTransform: "initial",
  }));

  const AvatarBox = styled(Box)(() => ({
    display: "flex",
    marginLeft: "auto",
    alignItems: "center",
    paddingRight: "4rem",
  }));

  const CustomAvatar = styled(Avatar)(() => ({
    height: "2.7rem",
    width: "2.7rem",
    backgroundColor: theme.palette.sec.main,
    margin: "1rem",
  }));

  return (
    <StyledPaper>
      <Box>
        <StyledButton variant="contained" color="bg">
          <ButtonText>Topic</ButtonText>
        </StyledButton>
        <StyledButton variant="contained" color="bg">
          <ButtonText>Group Discussion</ButtonText>
        </StyledButton>
        <StyledButton variant="contained" color="pri">
          <ButtonText>Join</ButtonText>
        </StyledButton>
      </Box>

      <AvatarBox>
        <CustomAvatar>A</CustomAvatar>
        <CustomAvatar>B</CustomAvatar>
        <CustomAvatar>C</CustomAvatar>
        <CustomAvatar>D</CustomAvatar>
      </AvatarBox>
    </StyledPaper>
  );
}

export default Session;
