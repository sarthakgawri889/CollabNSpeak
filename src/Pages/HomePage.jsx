import { Avatar, Button, Container, Typography } from "@mui/material";
import Appbar from "../Components/Appbar";
import { useNavigate } from "react-router-dom";
import AccountProvider from "../context/AccountProvider";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";

function HomePage() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const { t } = useTranslation();

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

      {isAuthenticated ? (
        <Container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            height: { xs: "auto", md: "23rem" },
            position: "relative",
            top: { xs: "10rem", md: "10rem" },
            padding: { xs: "2rem 1rem", md: "0" },
          }}
        >
          <Container
            sx={{
              width: { xs: "100%", md: "60%" },
              position: "relative",
              top: { xs: "0", md: "6rem" },
              left: { xs: "0", md: "-2rem" },
              marginBottom: { xs: "2rem", md: "0" },
            }}
          >
            <Container sx={{ width: { xs: "100%", md: "45rem" }, marginRight: { md: "8rem" } }}>
              <Typography variant="regular">{t("homepmessage")}</Typography>
            </Container>
            <Container sx={{ marginTop: "2rem", display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center" }}>
              <Button
                variant="contained"
                color="pri"
                sx={{
                  width: { xs: "100%", md: "220px" },
                  borderRadius: "25px",
                  paddingY: "1rem",
                  marginBottom: { xs: "1rem", md: "0" },
                  marginX: { md: ".5rem" },
                }}
                onClick={navigateToCreateSession}
              >
                <Typography variant="medium" sx={{ color: "white", textTransform: "initial" }}>
                  {t("newsession")}
                </Typography>
              </Button>
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  width: { xs: "100%", md: "220px" },
                  borderRadius: "25px",
                  paddingY: "1rem",
                  marginX: { md: ".5rem" },
                }}
                onClick={navigateToExistingPage}
              >
                <Typography variant="medium" sx={{ textTransform: "initial" }}>
                  {t("existingsession")}
                </Typography>
              </Button>
            </Container>
          </Container>
          <Container sx={{ width: { xs: "100%", md: "40%" }, display: "flex", justifyContent: "center" }}>
            <Avatar alt="Remy Sharp" src="../images/HomePage.jpg" sx={{ width: { xs: "20rem", md: "30rem" }, height: { xs: "20rem", md: "30rem" } }} />
          </Container>
        </Container>
      ) : (
        <Container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            height: { xs: "auto", md: "23rem" },
            position: "relative",
            top: { xs: "10rem", md: "10rem" },
            padding: { xs: "2rem 1rem", md: "0" },
          }}
        >
          <Container sx={{ width: { xs: "100%", md: "60%" }, position: "relative", top: { xs: "0", md: "4rem" }, marginBottom: { xs: "2rem", md: "0" } }}>
            <Container sx={{ width: { xs: "100%", md: "45rem" }, marginRight: { md: "8rem" } }}>
              <Typography variant="h2" component="div" sx={{ fontFamily: "Roboto" }}>
                {t("breakthelanguagebarrier")}
              </Typography>
              <Container />
              <Container sx={{ width: "100%", position: "relative", top: "2rem", right: { md: "1.4rem" } }}>
                <Typography variant="h6" component="div" sx={{ fontFamily: "Roboto" }}>
                  {t("innovativelanguagepracticeapp")}
                </Typography>
                <Typography variant="body1" component="div" sx={{ fontFamily: "Montserrat" }}>
                  {t("collabnspeak_description")}
                </Typography>
                <Button
                  variant="contained"
                  color="pri"
                  sx={{
                    width: { xs: "100%", md: "220px" },
                    marginTop: "1rem",
                    borderRadius: "25px",
                    paddingY: "1rem",
                    marginRight: { md: "1rem" },
                  }}
                  onClick={() => loginWithRedirect()}
                >
                  <Typography variant="medium" sx={{ color: "white", textTransform: "initial" }}>
                    {t("tryitforfree")}
                  </Typography>
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    width: { xs: "100%", md: "220px" },
                    marginTop: "1rem",
                    borderRadius: "25px",
                    paddingY: "1rem",
                  }}
                  onClick={() => navigate("/services")}
                >
                  <Typography variant="medium" sx={{ textTransform: "initial" }}>
                    {t("learnmore")}
                  </Typography>
                </Button>
              </Container>
            </Container>
          </Container>
          <Container sx={{ width: { xs: "100%", md: "40%" }, display: "flex", justifyContent: "center" }}>
            <Avatar alt="Remy Sharp" src="src/images/HomePage.jpg" sx={{ width: { xs: "20rem", md: "30rem" }, height: { xs: "20rem", md: "30rem" } }} />
          </Container>
        </Container>
      )}
    </div>
  );
}

export default HomePage;
