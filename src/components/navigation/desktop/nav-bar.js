import React from "react";
import { NavBarBrand } from "./nav-bar-brand";
import { NavBarButtons } from "./nav-bar-buttons";
import { NavBarTabs } from "./nav-bar-tabs";
import { loginButton } from "../../loginButton";
import { logoutButton } from "../../logoutButton";
import { useAuth0 } from "@auth0/auth0-react"

export const NavBar = () => {
  return (
    <div className="nav-bar__container">
      <nav className="nav-bar">
        <NavBarBrand />
        <NavBarTabs />
        <NavBarButtons />
        {!isAuthenticated && (
          <>
            <loginButton/>
          </>
        )}
        <loginButton/>
      </nav>
    </div>
  );
};
