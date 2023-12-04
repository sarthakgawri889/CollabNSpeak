import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Helmet from 'react-helmet';
import {styled,CardActions} from '@mui/material'
import { GoogleLogin } from '@react-oauth/google';

const Page = styled(Container)` 
    Rectangle 4 */
    position: relative;
    width: 30rem;
    height: 37rem;
    left: 600px; 
    top: 200px;
    background: #FFFFFF;
    border-radius: 25px;
`

const Welcome = styled(Typography)`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 20px;
    /* or 56% */
    text-align: center;
    letter-spacing: 0.05em;
    color: #000000;
    padding-top: 5rem; 
    padding-bottom: 2rem;
`

const Forgot = styled(Box)`
    position: relative;
    display: flex;
    justify: flex-end;
`

export default function SignIn() {

  return (

    <>
        <Helmet bodyAttributes={{style: 'background-color : #C8D8F0'}}/>
        <Page component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 9,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Welcome component="h1" variant="h5">
            Welcome Back!
          </Welcome>
          <Box component="form" noValidate sx={{ mt: 1, width: '20rem' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Grid sx={{display:'flex',justify:'flex-end'}}>
              <Grid item xs>
                <Forgot  sx={{ display: 'flex',justifyContent: 'flex-end' }}>
                    <Link href="#" variant="body2" >
                        Forgot password?
                    </Link>
                </Forgot>
                
              </Grid>
            </Grid>
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: '50px'}}
            >
              Sign In
            </Button>
            <GoogleLogin sx={{}}/>
            <Grid item sx={{mt:7,  display: 'flex', justifyContent: 'center'}}>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
          </Box>
        </Box>
      </Page>
    </>
      
  );
}