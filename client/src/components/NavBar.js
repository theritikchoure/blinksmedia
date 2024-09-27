// src/components/NavBar.js

import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import BlinksSVGLogo from "./BlinksSVGLogo";
import { AuthPopupsContext } from "../context/AuthPopupsContext";
import { AuthContext } from "../context/AuthenticationContext";

const NavBar = () => {
  const { openLoginPopup } = useContext(AuthPopupsContext);
  const { isUserLoggedIn, logout } = useContext(AuthContext);

  return (
    <header
      id="navbar"
      className="w-full h-16 bg-white text-gray-700 flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-10 border-b-2"
    >
      <div className="container flex items-start justify-between p-4 mx-auto flex-row">
        <Link
          to={`/`}
          className="flex items-center font-medium text-gray-900 title-font"
        >
          <img src="/blinks.png" className="w-8 mr-2" alt="blinksmedia" />
          <BlinksSVGLogo className="w-auto h-5 text-gray-900 fill-current" />
        </Link>

        <nav className="hidden md:flex flex-wrap gap-5 items-center justify-center pl-24 text-base md:ml-auto md:mr-auto">
          <Link to={`/`} className="font-medium hover:text-gray-900">
            App
          </Link>
          <Link
            to={`/system-design`}
            className="font-medium hover:text-gray-900"
          >
            System Design
          </Link>
          <Link
            to={`https://blinksmedia-production.up.railway.app/api-docs`}
            className="font-medium hover:text-gray-900"
            target="_blank"
          >
            API Swagger Documentation
          </Link>
        </nav>
        {!isUserLoggedIn && (
          <div className="items-center h-full">
            <button
              onClick={openLoginPopup}
              className="mr-5 font-medium hover:text-gray-900"
            >
              Login
            </button>
          </div>
        )}
        {isUserLoggedIn && (
          <div className="items-center h-full">
            <button
              onClick={logout}
              className="font-medium hover:text-gray-900"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
