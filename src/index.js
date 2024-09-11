import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import { Auth0ProviderWithNavigate } from "./auth0-provider-with-navigate";
import "./styles/styles.css";
//import { REACT_AUTH_DOMAIN, REACT_CLIENT_ID} from "./.env"

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate
            domain= "dev-2bajca0xaucbmx36.us.auth0.com"
            clientId= "z6yUQk13TM0tR89p8JRQJ8YAyApRXgoF"
            authorizationParams={{
              redirect_uri: window.location.origin
            }}
      >
        <App />
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);
