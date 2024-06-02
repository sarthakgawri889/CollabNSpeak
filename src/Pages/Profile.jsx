import {
  Avatar,
  Button,
  Card,
  Container,
  Paper,
  Typography,
  IconButton,
  Tooltip,
  Menu,
  Box,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssessmentIcon from "@mui/icons-material/Assessment";
import MailIcon from "@mui/icons-material/Mail";
import WcIcon from "@mui/icons-material/Wc";
import HomeIcon from "@mui/icons-material/Home";
import Logout from "@mui/icons-material/Logout";

import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { getUsers } from "../service/api";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function Profile() {
  const theme = useTheme();
  const { user, logout, isAuthenticated } = useAuth0();
  const [anchorEl, setAnchorEl] = useState(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const location = useLocation();
  const handleClickb = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (location.state && location.state.language) {
      i18n.changeLanguage(location.state.language);
    }
  }, [location.state]);

  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUsers();
        if (user) {
          const loggedInUser = response.find((u) => u.sub === user.sub);
          setCurrentUser(loggedInUser);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user]);

  const navigateToEdit = () => {
    navigate("/editp", { state: { currentUser } });
  };

  const navigateToQuizz = () => {
    navigate("/quizstart");
  };

  const navigateToRecent = () => {
    navigate("/recent");
  };

  const Linked = styled(Link)`
    text-decoration: none; /* Remove default underline */
    color: inherit; /* Inherit color from parent */
    cursor: pointer;
  `;

  const CustomPaper = styled(Paper)(() => ({
    height: "40.625rem", // 650px
    width: "56.25rem", // 900px
    backgroundColor: theme.palette.gray.main,
    borderRadius: "1.5625rem", // 25px
    margin: "1.4rem auto",
  }));

  const ProfileHeading = styled(Typography)(() => ({
    font: theme.typography.header1,
    fontSize: "1.875rem", // 30px
    margin: "0.5rem 0 0.2rem 1rem",
  }));

  const UserDetails = styled(Typography)(() => ({
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: "1.25rem", // 20px
    color: "#00000096",
    margin: "1.875rem 1.5rem", // 30px 24px
  }));

  const [picture] = useState(null);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated || !user || !currentUser) {
    return <div>No user data available</div>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CustomPaper>
        <Container sx={{ display: "flex", alignItems: "center" }}>
          <Paper
            sx={{
              width: "100%",
              height: "3.75rem", // 60px
              marginY: "1rem",
              borderRadius: "0.9375rem 0 0 0.9375rem", // 15px 0px 0px 15px
            }}
          >
            <ProfileHeading>{t("profile")}</ProfileHeading>
          </Paper>

          <Container
            sx={{
              width: "100%",
              height: "3.75rem", // 60px
              marginY: "1rem",
              display: "flex",
              justifyContent: "flex-end",
              background: "white",
              borderRadius: "0 0.9375rem 0.9375rem 0", // 0px 15px 15px 0px
            }}
          >
            <Tooltip title="Account">
              <IconButton
                onClick={handleClickb}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar
                  src={
                    currentUser.picture
                      ? currentUser.picture.startsWith("http")
                        ? currentUser.picture
                        : `${import.meta.env.VITE_API_URL}/${currentUser.picture}`
                      : picture
                      ? URL.createObjectURL(picture)
                      : "fallback_image_url.jpg"
                  }
                  sx={{ width: "2.5rem", height: "2.5rem" }} // 40px
                >
                  {currentUser.name}
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: "4.5rem", // 152px
                  ml: "64rem", // 129px
                  "& .MuiAvatar-root": {
                    width: "2rem", // 32px
                    height: "2rem", // 32px
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: "0.625rem", // 10px
                    height: "0.625rem", // 10px
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <Linked to="/" onClick={handleClose}>
                <MenuItem>
                  <ListItemIcon>
                    <HomeIcon fontSize="small" />
                  </ListItemIcon>
                  {t("home")}
                </MenuItem>
              </Linked>
              <Box
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  {t("logout")}
                </MenuItem>
              </Box>
            </Menu>
          </Container>
        </Container>

        <Container sx={{ display: "flex" }}>
          <Card
            sx={{
              height: "33.4375rem",
              width: "32rem",
              borderRadius: "0.9375rem",
            }}
          >
            {/* 535px 480px 15px */}
            <Container sx={{ marginY: "0.5625rem" }}>
              {" "}
              {/* 9px */}
              <UserDetails>{t("details")}</UserDetails>
            </Container>
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <Avatar
                src={
                  currentUser.picture
                    ? currentUser.picture.startsWith("http")
                      ? currentUser.picture
                      : `${import.meta.env.VITE_API_URL}/${currentUser.picture}`
                    : picture
                    ? URL.createObjectURL(picture)
                    : "fallback_image_url.jpg"
                }
                sx={{ width: "7rem", height: "7rem" }} // 112px
              >
                {currentUser.name}
              </Avatar>
            </Container>
            <Container sx={{ display: "flex", marginTop: "0.7rem" }}>
              <AccountCircleIcon
                sx={{ width: "1.875rem", height: "1.875rem" }}
              />{" "}
              {/* 30px */}
              <Typography
                variant="medium"
                sx={{ marginY: "0.68rem", marginX: "1rem" }}
              >
                {currentUser.nickname}
              </Typography>
            </Container>
            <Container sx={{ display: "flex", marginY: "0.7rem" }}>
              <AssessmentIcon sx={{ width: "1.875rem", height: "1.875rem" }} />{" "}
              {/* 30px */}
              <Typography
                variant="medium"
                sx={{ marginY: "0.68rem", marginX: "1rem" }}
              >
                {currentUser.level}
              </Typography>
            </Container>
            <Container sx={{ display: "flex", marginY: "0.7rem" }}>
              <MailIcon sx={{ width: "1.875rem", height: "1.875rem" }} />{" "}
              {/* 30px */}
              <Typography
                variant="medium"
                sx={{ marginY: "0.68rem", marginX: "1rem" }}
              >
                {currentUser.email}
              </Typography>
            </Container>
            <Container
              sx={{
                display: "flex",
                marginTop: "0.7rem",
                marginBottom: "1rem",
              }}
            >
              <WcIcon sx={{ width: "1.875rem", height: "1.875rem" }} />{" "}
              {/* 30px */}
              <Typography
                variant="medium"
                sx={{ marginY: "0.68rem", marginX: "1rem" }}
              >
                {currentUser.gender}
              </Typography>
            </Container>
            <Container>
              <Button
                variant="contained"
                color="pri"
                sx={{
                  marginX: "3rem",
                  borderRadius: "0.9375rem", // 15px
                  color: "Black",
                  padding: "0.8rem",
                  width: "14.0625rem", // 225px
                  marginY: "0.5rem",
                }}
                onClick={navigateToRecent}
              >
                <Typography
                  variant="small"
                  sx={{ fontWeight: "900", color: "White" }}
                >
                  Recent Meeting
                </Typography>
              </Button>
              <Button
                variant="contained"
                color="pri"
                sx={{
                  marginX: "3rem",
                  borderRadius: "0.9375rem", // 15px
                  color: "Black",
                  padding: "0.8rem",
                  width: "14.0625rem", // 225px
                  marginY: "0.5rem",
                }}
                onClick={navigateToEdit}
              >
                <Typography
                  variant="small"
                  sx={{ fontWeight: "900", color: "White" }}
                >
                  {t("editp")}
                </Typography>
              </Button>
              <Button
                variant="contained"
                color="pri"
                sx={{
                  marginX: "3rem",
                  borderRadius: "0.9375rem", // 15px
                  color: "Black",
                  padding: "0.8rem",
                  width: "14.0625rem", // 225px
                }}
                onClick={navigateToQuizz}
              >
                <Typography
                  variant="small"
                  sx={{ fontWeight: "900", color: "White" }}
                >
                  {t("taket")}
                </Typography>
              </Button>
            </Container>
          </Card>
          <Card
            sx={{
              height: "33.4375rem", // 535px
              width: "35.5rem", // 568px
              marginLeft: "1.5rem",
              position: "relative",
              borderRadius: "0.9375rem", // 15px
            }}
          >
            <Container>
              <Container>
                <Container
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Avatar
                    alt="Profile Picture"
                    src={"../images/xmpKItamQSS5555tCSJevg.jpg"}
                    sx={{
                      width: "34.875rem", // 558px
                      height: "35.625rem", // 570px
                      objectFit: "cover",
                      borderRadius: 0,
                    }}
                  />
                </Container>
              </Container>
            </Container>
          </Card>
        </Container>
      </CustomPaper>
    </div>
  );
}

export default Profile;
