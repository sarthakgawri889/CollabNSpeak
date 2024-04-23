import { Button, Card, Container, Typography } from "@mui/material";
import Appbar from "../Components/Appbar";
import { useNavigate } from "react-router-dom";
import AccountProvider from "../context/AccountProvider";
import { useAuth0 } from "@auth0/auth0-react";
function HomePage() {
  const {isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const navigateToExistingPage = () => {
    navigate("/existsession");
  };

  const navigateToCreateSession = () => {
    navigate("/createsession");
  };


  return (
    <div>
      <AccountProvider>
         <Appbar />
      </AccountProvider>
      
      {isAuthenticated? 
         <Container
         sx={{
           display: "flex",
           height: "23rem",
           position: "relative",
           top: "10rem",
         }}
       >
         <Container sx={{ width: "60%", position: "relative", top: "14rem" }}>
           <Container sx={{ width: "45rem", marginRight: "8rem" }}>
             <Typography variant="regular">
             Welcome to our language learning community, where you can collaborate and practice languages in a supportive and interactive environment!
             </Typography>
           </Container>
           <Container sx={{ marginTop: "2rem" }}>
             <Button
               variant="contained"
               color="pri"
               sx={{
                 width: "220px",
                 marginleft: "2rem",
                 borderRadius: "25px",
                 marginX: ".5rem",
                 paddingY: "1rem",
               }}
               onClick={navigateToCreateSession}
             >
               <Typography
                 variant="medium"
                 sx={{ color: "white", textTransform: "initial" }}
               >
                 New Session
               </Typography>
             </Button>
             <Button
               variant="contained"
               color="bg"
               sx={{
                 width: "220px",
                 borderRadius: "25px",
                 marginX: ".5rem",
                 marginleft: "5rem",
                 paddingY: "1rem",
               }}
               onClick={navigateToExistingPage}
             >
               <Typography variant="medium" sx={{ textTransform: "initial" }}>
                 Existing Session
               </Typography>
             </Button>
           </Container>
         </Container>
         <Container sx={{ width: "40%" }}>
           <Card
             sx={{
               borderRadius: "230px",
               marginX: "5rem",
               height: "450px",
               width: "320px",
               backgroundColor: "gray.main",
             }}
           ></Card>{" "}
         </Container>
       </Container> : <>
       
       <Container
         sx={{
           display: "flex",
           height: "23rem",
           position: "relative",
           top: "10rem",
         }}
       >
         <Container sx={{ width: "60%", position: "relative", top: "14rem" }}>
           <Container sx={{ width: "45rem", marginRight: "8rem" }}>
             
           </Container>
         </Container>
         <Container sx={{ width: "40%" }}>
           <Card
             sx={{
               borderRadius: "230px",
               marginX: "5rem",
               height: "450px",
               width: "320px",
               backgroundColor: "gray.main",
             }}
           ></Card>{" "}
         </Container>
       </Container>
       
       </>
    }
      
    </div>
  );
}
export default HomePage;
