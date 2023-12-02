import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Box,
  Card,
  CardContent,
  Toolbar,
  Typography,
} from "@mui/material";

function Appbar() {
  const theme = useTheme();

  const CustomAppBar = styled(AppBar)(() => ({
    backgroundColor: "transparent",
    padding: "1rem 9rem 1rem 9rem",
  }));

  const Logo = styled(Card)(() => ({
    backgroundColor: theme.palette.bg.main,
    width: 260,
    height: 55,
    borderRadius: "15px",
  }));

  const LogoContent = styled(CardContent)(() => ({
    textAlign: "center",
    marginTop: "3px",
  }));

  return (
    <CustomAppBar sx={{ boxShadow: 0 }}>
      <Toolbar>
        <Logo sx={{ boxShadow: 0 }}>
          <LogoContent>
            <Typography variant="header2" color="black">
              CollabNSpeak
            </Typography>
          </LogoContent>
        </Logo>

        <Box sx={{ marginLeft: "auto" }}>
          <Typography variant="regular" color="black" sx={{ paddingX: "10px" }}>
            Home
          </Typography>
          <Typography variant="regular" color="black" sx={{ paddingX: "10px" }}>
            Services
          </Typography>
          <Typography
            variant="regular"
            color="black"
            sx={{ paddingRight: "40px", paddingLeft: "10px" }}
          >
            About Us
          </Typography>
        </Box>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
      </Toolbar>
    </CustomAppBar>
  );
}

export default Appbar;
