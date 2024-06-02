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
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  useMediaQuery,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "@mui/icons-material/Logout";
import LanguageIcon from "@mui/icons-material/Language";
import { useAuth0 } from "@auth0/auth0-react";
import { addUser, getUsers } from "../service/api";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function Appbar() {
  const navigate = useNavigate();
  const { loginWithRedirect, user, logout, isAuthenticated } = useAuth0();
  const [anchorEl, setAnchorEl] = useState(null);
  const [languageDialogOpen, setLanguageDialogOpen] = useState(false);
  const [, setSelectedValue] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const languageOptions = { English: "en", Hindi: "hi", German: "de" };
  const open = Boolean(anchorEl);
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const CustomAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: "white",
    padding: isMobile ? "0.5rem 1rem" : "1.2rem 9rem",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "start" : "center",
  }));

  const Logo = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.bg.main,
    width: isMobile ? "100%" : 260,
    height: 55,
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: isMobile ? "0.5rem" : "0",
  }));

  const adduser = async () => {
    if (isAuthenticated) {
      await addUser(user);
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    const handleAddUser = async () => {
      if (isAuthenticated) {
        await adduser();
      }
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
    };

    handleAddUser();
  }, [isAuthenticated, user]);

  const navigateToServices = () => {
    navigate("/services");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToAbout = () => {
    navigate("/aboutus");
  };

  const navigateToProfile = () => {
    navigate("/profile", { state: { language: i18n.language } });
  };

  const [picture] = useState(null);
  if (loading) {
    return <div>Loading...</div>;
  }

  const handleLanguageIconClick = () => {
    setLanguageDialogOpen(true);
  };

  const handleLanguageDialogClose = (value) => {
    setLanguageDialogOpen(false);
    setSelectedValue(value);
  };

  const handleListItemClick = (value) => {
    const languageCode = languageOptions[value];
    i18n.changeLanguage(languageCode);
    handleLanguageDialogClose(value);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <CustomAppBar sx={{ boxShadow: 0 }}>
      <Logo sx={{ boxShadow: 0 }}>
        <CardContent sx={{ textAlign: "center", marginTop: "10px" }}>
          <Typography variant="header2" color="black">
            CollabNSpeak
          </Typography>
        </CardContent>
      </Logo>

      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "start" : "center",
          width: isMobile ? "100%" : "auto",
          marginLeft: isMobile ? "0" : "auto",
        }}
      >
        <Toolbar sx={{ padding: 0 }}>
          <Button onClick={navigateToHome}>
            <Typography variant="medium" color="black" sx={{ paddingX: "5px" }}>
              {t("home")}
            </Typography>
          </Button>

          <Button onClick={navigateToServices}>
            <Typography variant="medium" color="black" sx={{ paddingX: "5px" }}>
              {t("services")}
            </Typography>
          </Button>

          <Button onClick={navigateToAbout}>
            <Typography variant="medium" color="black" sx={{ paddingX: "5px" }}>
              {t("about")}
            </Typography>
          </Button>

          <IconButton onClick={handleLanguageIconClick}>
            <LanguageIcon />
          </IconButton>

          <Dialog onClose={handleLanguageDialogClose} open={languageDialogOpen}>
            <DialogTitle>Select Language</DialogTitle>
            <List sx={{ pt: 0 }}>
              {Object.keys(languageOptions).map((language) => (
                <ListItem disableGutters key={language}>
                  <ListItemButton onClick={() => handleListItemClick(language)}>
                    <ListItemText primary={language} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Dialog>

          {isAuthenticated && currentUser ? (
            <>
              <Tooltip title="Account">
                <IconButton
                  onClick={(e) => setAnchorEl(e.currentTarget)}
                  size="small"
                  sx={{ ml: 1 }}
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
                onClose={handleMenuClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: isMobile ? "7rem" : "3.4rem",
                    ml: isMobile ? "1rem" : "75.4rem",
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <Box onClick={navigateToProfile}>
                  <MenuItem onClick={handleMenuClose}>
                    <Avatar />{" "}
                    <Box sx={{ textDecoration: "none" }}>{t("profile")}</Box>
                  </MenuItem>
                </Box>

                <Box
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  <MenuItem onClick={handleMenuClose}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    {t("logout")}
                  </MenuItem>
                </Box>
              </Menu>
            </>
          ) : (
            <Button onClick={() => loginWithRedirect()} color="pri">
              {t("login")}
            </Button>
          )}
        </Toolbar>
      </Box>
    </CustomAppBar>
  );
}

export default Appbar;
