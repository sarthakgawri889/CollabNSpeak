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
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getUsers } from "../service/api";
function Appbar() {
  const navigate = useNavigate();
  const { loginWithRedirect, user } = useAuth0();
  const { logout, isAuthenticated } = useAuth0();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClickb = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const theme = useTheme();

  const CustomAppBar = styled(AppBar)(() => ({
    backgroundColor: "white",
    padding: "1.2rem 9rem 1rem 9rem",
    display: "flex",
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

  const Linked = styled(Link)`
    text-decoration: none; /* Remove default underline */
    color: inherit; /* Inherit color from parent */
    cursor: pointer;
  `;
  const [, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const adduser = async () => {
    if (isAuthenticated) {
      await addUser(user);
    } else {
      console.log("error");
    }
  };

  if (isAuthenticated) {
    adduser();
  }

  const navigateToServices = () => {
    navigate("/services");
  };

  const navigateToHome = () => {
    navigate("/");
  };
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

  const [picture, ] = useState(null);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated || !user || !currentUser) {
    return <div>No user data available</div>;
  }

  return (
    <CustomAppBar sx={{ boxShadow: 0 }}>
      <Logo sx={{ boxShadow: 0 }}>
        <LogoContent>
          <Typography variant="header2" color="black">
            CollabNSpeak
          </Typography>
        </LogoContent>
      </Logo>

      <Box sx={{ marginLeft: "auto", marginTop: "-60px" }}>
        <Toolbar>
          <Button onClick={navigateToHome}>
            <Typography variant="medium" color="black" sx={{ paddingX: "5px" }}>
              Home
            </Typography>
          </Button>

          <Button onClick={navigateToServices}>
            <Typography variant="medium" color="black" sx={{ paddingX: "5px" }}>
              Services
            </Typography>
          </Button>

          <Button>
            <Typography variant="medium" color="black" sx={{ paddingX: "5px" }}>
              About Us
            </Typography>
          </Button>

          {isAuthenticated ? (
            <>
              <Tooltip title="Account">
                <IconButton
                  onClick={handleClickb}
                  size="small"
                  sx={{ ml: 1 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar 
  src={currentUser.picture ? 
       (currentUser.picture.startsWith("http") ? 
         currentUser.picture : 
         `http://localhost:8000/${currentUser.picture}`) : 
       (picture ? 
         URL.createObjectURL(picture) : 
         'fallback_image_url.jpg')}
  sx={{ width: 56, height: 56 }}
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
                    mt: 11.5,
                    ml: 149,
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
                <Linked to="/profile" onClick={handleClick}>
                  <MenuItem onClick={handleClose}>
                    <Avatar />{" "}
                    <Box sx={{ textDecoration: "none" }}>Profile</Box>
                  </MenuItem>
                </Linked>
                <Box
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Box>
              </Menu>
            </>
          ) : (
            <Button onClick={() => loginWithRedirect()} color="primary">
              Log In
            </Button>
          )}
        </Toolbar>
      </Box>
    </CustomAppBar>
  );
}

export default Appbar;
