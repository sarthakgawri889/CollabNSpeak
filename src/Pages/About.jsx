import React from "react";
import Appbar from "../Components/Appbar";
import AccountProvider from "../context/AccountProvider";
import { Container, Typography, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
function About() {
  const { t } = useTranslation();
  return (
    <>
      <AccountProvider>
        <Appbar />
      </AccountProvider>

      <Container
        sx={{
          width: "100%",
          position: "relative",
          top: "9rem",
          left: "0.4rem",
        }}
      >
        <Typography variant="header1" fontWeight="bold">
          {t("abcns")}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginTop: "1rem",
            width: "90%",
            marginLeft: "1rem",
            textAlign: "justify",
            fontFamily: "Montserrat",
          }}
        >
          {t("abcnsintro")}
        </Typography>
        <Divider
          sx={{ marginTop: "1rem", width: "90%", marginLeft: "1rem" }}
        ></Divider>
      </Container>

      <Container
        sx={{
          width: "100%",
          position: "relative",
          top: "10.5rem",
          left: "0.4rem",
        }}
      >
        <Typography
          variant="header2"
          fontWeight="bold"
          sx={{ marginTop: "1rem", width: "90%", marginLeft: "1rem" }}
        >
          {t("mission")}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginTop: "1rem",
            width: "90%",
            marginLeft: "1rem",
            textAlign: "justify",
            fontFamily: "Montserrat",
          }}
        >
          {t("missintro")}
        </Typography>
      </Container>

      <Container
        sx={{
          width: "100%",
          position: "relative",
          top: "12.5rem",
          left: "0.4rem",
        }}
      >
        <Typography
          variant="header2"
          fontWeight="bold"
          sx={{ marginTop: "1rem", width: "90%", marginLeft: "1rem" }}
        >
          {t("values")}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginTop: "1rem",
            width: "90%",
            marginLeft: "1rem",
            textAlign: "justify",
            fontFamily: "Montserrat",
          }}
        >
          <ul>
            <li>{t("v1")}</li>
            <li>{t("v2")}</li>
            <li>{t("v3")}</li>
            <li>{t("v4")}</li>
            <li>{t("v4")}</li>
          </ul>
        </Typography>
      </Container>

      <Container
        sx={{
          width: "100%",
          position: "relative",
          top: "14.5rem",
          left: "0.4rem",
        }}
      >
        <Typography
          variant="header2"
          fontWeight="bold"
          sx={{ marginTop: "1rem", width: "90%", marginLeft: "1rem" }}
        >
          {t("team")}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginTop: "1rem",
            width: "90%",
            marginLeft: "1rem",
            textAlign: "justify",
            fontFamily: "Montserrat",
          }}
        >
          {t("teamintro")}
        </Typography>
      </Container>

      <Container
        sx={{
          width: "100%",
          position: "relative",
          top: "16.5rem",
          left: "0.4rem",
        }}
      >
        <Typography
          variant="header2"
          fontWeight="bold"
          sx={{ marginTop: "1rem", width: "90%", marginLeft: "1rem" }}
        >
          {t("contact")}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginTop: "1rem",
            width: "90%",
            marginLeft: "1rem",
            textAlign: "justify",
            fontFamily: "Montserrat",
          }}
        >
          {t("contactintro")}
        </Typography>
        <Divider
          sx={{ marginTop: "1rem", width: "90%", marginLeft: "1rem" }}
        ></Divider>

        <Typography
          variant="body1"
          fontWeight="bold"
          sx={{
            marginTop: "1rem",
            width: "90%",
            marginLeft: "1rem",
            textAlign: "justify",
            fontFamily: "Montserrat",
          }}
        >
          {t("join")}
        </Typography>
      </Container>
    </>
  );
}

export default About;
