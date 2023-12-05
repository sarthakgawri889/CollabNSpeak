import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled, CardActions } from "@mui/material";
import Helmet from "react-helmet";
import { GoogleLogin } from "@react-oauth/google";

// import { GoogleLogin } from '@react-oauth/google';

const Page = styled(Container)`
  /*Rectangle 4 */
  position: relative;
  width: 40rem;
  height: 37rem;
  left: 600px;
  top: 200px;
  background: #ffffff;
  border-radius: 25px;
`;

const SigUpT = styled(Typography)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 20px;
  /* or 56% */
  text-align: center;
  letter-spacing: 0.05em;
  color: #000000;
  padding-top: 2rem;
`;

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
      <Helmet bodyAttributes={{ style: "background-color : #C8D8F0" }} />
      <Page component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <SigUpT>Sign up</SigUpT>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 5 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "#2D8CFF",
                  borderRadius: "50px",
                  mt: 3,
                  mb: 2,
                  width: "500px",
                  height: "52px",
                  textTransform: "initial",
                }}
              >
                Sign Up
              </Button>
            </CardActions>

            <Grid container justifyContent="center">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Grid item xs={10}>
          <GoogleLogin sx={{}} />
        </Grid>
      </Page>
    </>
  );
}
