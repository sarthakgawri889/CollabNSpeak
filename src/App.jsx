import { ThemeProvider, createTheme } from "@mui/material/styles";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Desktop4 from "./Pages/ExistingSession";
import CreateSession from "./Pages/CreateSession";
import Profile from "./Pages/Profile";
import BarCat from "./Pages/BarCat";
import VideoCall from "./Pages/VideoCall";
import AccountProvider from "./context/AccountProvider";
import { Auth0Provider } from '@auth0/auth0-react';
const theme = createTheme({
  palette: {
    bg: {
      main: "#C8D8F0",
    },
    pri: {
      main: "#2D8CFF",
    },
    sec: {
      main: "#EEAF8B",
    },
    gray: {
      main: "#747487",
    },
  },

  typography: {
    header1: {
      fontFamily: "Roboto",
      fontWeight: "700",
      fontSize: "36px",
      lineHeight: "20px",
      letterSpacing: "1.8px",
    },
    header2: {
      fontFamily: "Roboto",
      fontWeight: "700",
      fontSize: "30px",
      lineHeight: "18px",
      letterSpacing: "1.5px",
    },
    regular: {
      fontFamily: "Montserrat",
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "30px",
      letterSpacing: "0.5px",
    },
    medium: {
      fontFamily: "Montserrat",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "10px",
      letterSpacing: "1.2px",
    },
    small: {
      fontFamily: "Montserrat",
      fontWeight: "300",
      fontSize: "12px",
      lineHeight: "8px",
      letterSpacing: "1px",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/profile",
    element: 
    <Auth0Provider
    domain="dev-7ewbym1pocfjtobq.us.auth0.com"
    clientId="Hu86LWmBZbqtRUfpRhzWmZq7zs8KKdss"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    useRefreshTokens={true}
    cacheLocation="localstorage"
  > <AccountProvider><Profile />,
  
  </AccountProvider>
  
  </Auth0Provider>
    
},
  {
    path: "/",
    element: 
    <Auth0Provider
    domain="dev-7ewbym1pocfjtobq.us.auth0.com"
    clientId="Hu86LWmBZbqtRUfpRhzWmZq7zs8KKdss"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    useRefreshTokens={true}
    cacheLocation="localstorage"
  > <AccountProvider>
  <HomePage />,
</AccountProvider></Auth0Provider>
   
  },
  {
    path: "/existsession",
    element:
    <Auth0Provider
    domain="dev-7ewbym1pocfjtobq.us.auth0.com"
    clientId="Hu86LWmBZbqtRUfpRhzWmZq7zs8KKdss"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    useRefreshTokens={true}
    cacheLocation="localstorage"
  > <AccountProvider><Desktop4 /></AccountProvider>,</Auth0Provider>
   
  },
  {
    path: "/createsession",
    element:
    <Auth0Provider
    domain="dev-7ewbym1pocfjtobq.us.auth0.com"
    clientId="Hu86LWmBZbqtRUfpRhzWmZq7zs8KKdss"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    useRefreshTokens={true}
    cacheLocation="localstorage"
  ><AccountProvider><CreateSession />,</AccountProvider></Auth0Provider>
          
  },
  {
    path: "/barcat",
    element: 
    <Auth0Provider
    domain="dev-7ewbym1pocfjtobq.us.auth0.com"
    clientId="Hu86LWmBZbqtRUfpRhzWmZq7zs8KKdss"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    useRefreshTokens={true}
    cacheLocation="localstorage"
  ><AccountProvider>
  <BarCat />,
</AccountProvider></Auth0Provider>
    
  },
  {
    path: "/videocall",
    element:
    <Auth0Provider
    domain="dev-7ewbym1pocfjtobq.us.auth0.com"
    clientId="Hu86LWmBZbqtRUfpRhzWmZq7zs8KKdss"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    useRefreshTokens={true}
    cacheLocation="localstorage"
  ><AccountProvider><VideoCall />,</AccountProvider></Auth0Provider>
    
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
