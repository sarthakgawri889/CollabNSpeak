import {
  Avatar,
  Button,
  Card,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssessmentIcon from "@mui/icons-material/Assessment";
import MailIcon from "@mui/icons-material/Mail";
import WcIcon from "@mui/icons-material/Wc";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


function Profile() {
  const theme = useTheme();
  const {user,logout } = useAuth0();
  console.log(user);
  const CustomPaper = styled(Paper)(() => ({
    height: "670px",
    width: "950px",
    backgroundColor: theme.palette.gray.main,
    borderRadius: "25px",
    margin: "1.4rem 17rem 1.4rem 17rem",
  }));

  const Profile = styled(Typography)(() => ({
    font: theme.typography.header2,
    fontSize: "30px",
    margin: "0.1rem 0 0.1rem 7.5rem",
  }));

  const Details = styled(Typography)(() => ({
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: "20px",
    color: "#00000096",
    marign: "30px 24px 30px 24px",
  }));
 
  const userName = user.nickname;
  const email = user.email;
  return (
    <div>
      
      <CustomPaper>
        <Container sx={{ display: "flex" }}>
          <Paper sx={{ width: "590px", height: "50px", marginY: "1rem" }}>
            <Profile>Profile</Profile>
          </Paper>

          

          <Container sx={{ marginY: "1rem" }}>
            <Link to='/'>
            <Avatar
              sx={{ marginLeft: "28rem", width: "50px", height: "50px" }}
              src={user.picture}
            ></Avatar>
            </Link>
           
          </Container>
        </Container>
        <Container sx={{ display: "flex" }}>
          <Card sx={{ height: "570px", width: "380px" }}>
            <Container sx={{ marginY: "10px" }}>
              <Details>Details</Details>
            </Container>

            <Container sx={{ display: "flex" }}>
              <AccountCircleIcon
                sx={{ width: "30px", height: "30px" }}
              ></AccountCircleIcon>
              <Typography
                variant="medium"
                sx={{ marginY: "0.68rem", marginX: "1rem" }}
              >
                {userName}
              </Typography>
            </Container>

            <Container sx={{ display: "flex", marginY: "0.7rem" }}>
              <AssessmentIcon
                sx={{ width: "30px", height: "30px" }}
              ></AssessmentIcon>
              <Typography 
                variant="medium"
                sx={{ marginY: "0.68rem", marginX: "1rem" }}
              >
                Intermediate
              </Typography>
            </Container>
            <Container sx={{ display: "flex", marginY: "0.7rem" }}>
              <MailIcon sx={{ width: "30px", height: "30px" }}></MailIcon>
              <Typography
                variant="medium"
                sx={{ marginY: "0.68rem", marginX: "1rem" }}
              >
                {email}
              </Typography>
            </Container>
            <Container sx={{ display: "flex", marginTop: "0.7rem" }}>
              <WcIcon sx={{ width: "30px", height: "30px" }}></WcIcon>
              <Typography
                variant="medium"
                sx={{ marginY: "0.68rem", marginX: "1rem" }}
              >
                Male
              </Typography>
            </Container>

            <Container
              sx={{ display: "flex", marginY: "1rem", marginTop: "11.5rem" }}
            >
              
              
            </Container>
            <Container>
              
              <Button
                variant="contained"
                color="pri"
                sx={{
                  marginX: "1rem",
                  borderRadius: "25px",
                  color: "Black",
                  padding: "0.8rem",
                  width: "225px",
                }}
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              >
                <Typography
                  variant="small"
                  sx={{ fontWeight: "900", color: "White" }}
                >
                  Logout
                </Typography>
              </Button>
              
              
            </Container>
          </Card>
          <Card sx={{ height: "570px", width: "568px", marginLeft: "1.5rem" }}>
            <Container>
              <Container Container sx={{ marginTop: "2rem" }}>
                
              </Container>
            </Container>
            <Container sx={{ marginY: "6rem" }}>
              <Container sx={{ display: "flex" }}>
                
              </Container>
              <Container sx={{ display: "flex", marginY: "1rem" }}>

                <Button
                  variant="contained"
                  color="sec"
                  sx={{
                    marginX: "0.2rem",
                    borderRadius: "25px",
                    color: "Black",
                    padding: "0.8rem",
                    width: "336px",
                  }}
                >
                  <Typography variant="small" sx={{ fontWeight: "900" }}>
                    Take Test
                  </Typography>
                </Button>
              </Container>
            </Container>
          </Card>
        </Container>
      </CustomPaper>
    </div>
  );
}

export default Profile;
