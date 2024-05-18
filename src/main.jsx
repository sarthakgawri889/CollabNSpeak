import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import AccountProvider from "./context/AccountProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-7ewbym1pocfjtobq.us.auth0.com"
      clientId="Hu86LWmBZbqtRUfpRhzWmZq7zs8KKdss"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <AccountProvider>
        <App />
      </AccountProvider>
    </Auth0Provider>
  </React.StrictMode>
);
