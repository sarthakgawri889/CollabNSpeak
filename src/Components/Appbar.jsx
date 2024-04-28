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
  Button
} from "@mui/material";
import { useState } from "react";
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { useAuth0 } from "@auth0/auth0-react";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";

function Appbar() {
  const navigate = useNavigate();
  const { loginWithRedirect,user } = useAuth0();
  const { logout, isAuthenticated } = useAuth0();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClickb = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log(user);
  const theme = useTheme();

  const CustomAppBar = styled(AppBar)(() => ({
    backgroundColor: "white",
    padding: "3rem 9rem 1rem 9rem",
    display: "flex"
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
  `
  const [, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const adduser = async()=>{
    if(isAuthenticated){
      await addUser(user);
    }else{
      console.log('error');
    }
  }

  if(isAuthenticated){
    adduser();
  }

  const navigateToServices = () => {
    navigate("/services");
  };

  const navigateToHome = () => {
    navigate("/");
  };

 

  return (
    <CustomAppBar sx={{ boxShadow: 0 }}>
        <Logo sx={{ boxShadow: 0 }}>
          <LogoContent>
            <Typography variant="header2" color="black">
              CollabNSpeak
            </Typography>
          </LogoContent>
        </Logo>

        <Box sx={{ marginLeft: 'auto', marginTop:'-52px' }}>
          <Toolbar>
            <Button onClick={navigateToHome}>
                <Typography variant="regular" color="black" sx={{ paddingX: "10px" }}>
                  Home
                </Typography>
            </Button>
            
            <Button onClick={navigateToServices}>
                <Typography variant="regular" color="black" sx={{ paddingX: "10px" }} >
                  Services
                </Typography>
            </Button>
           
            <Typography
              variant="regular"
              color="black"
              sx={{ paddingRight: "40px", paddingLeft: "10px" }}
            >
              About Us
            </Typography>

            {isAuthenticated ? (
              <>
                <Tooltip title="Account">
                  <IconButton
                    onClick={handleClickb}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar src={user.picture} sx={{ width: 56, height: 56 }}>M</Avatar>
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
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 11.5,
                      ml: 149,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <Linked to="/profile" onClick={handleClick} >
                    <MenuItem onClick={handleClose}>
                      <Avatar /> <Box sx={{ textDecoration: 'none' }}>Profile</Box>
                    </MenuItem>
                  </Linked>
                  <Box onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Logout fontSize="small"  />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                  </Box>
                  
                </Menu>
              </>
            ) : (
              <Button onClick={() => loginWithRedirect()} color="primary">Log In</Button>
            )}
          </Toolbar>
        </Box>
  </CustomAppBar>
  );
}

export default Appbar;
