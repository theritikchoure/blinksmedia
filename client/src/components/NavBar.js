// src/components/NavBar.js

import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import BlinksSVGLogo from "./BlinksSVGLogo";
import { AuthPopupsContext } from "../context/AuthPopupsContext";
import { AuthContext } from "../context/AuthenticationContext";

const NavBar = () => {
  const { openLoginPopup, openRegisterPopup } = useContext(AuthPopupsContext);
  const { isUserLoggedIn, logout } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full h-16 bg-white text-gray-700 flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-10 border-b-2">
      <div className="container flex items-start justify-between p-4 mx-auto flex-row">
        <Link
          to={`/`}
          className="flex items-center font-medium text-gray-900 title-font"
        >
          <img src="/blinks.png" className="w-8 mr-2" />
          <BlinksSVGLogo className="w-auto h-5 text-gray-900 fill-current" />
        </Link>

        <nav className="hidden md:flex flex-wrap gap-5 items-center justify-center pl-24 text-base md:ml-auto md:mr-auto">
          <Link to={`/for-you`} className="font-medium hover:text-gray-900">
            For you
          </Link>
          <Link to={`/explore`} className="font-medium hover:text-gray-900">
            Explore
          </Link>
          {isUserLoggedIn && (<Fragment>
            <Link to={`/following`} className="font-medium hover:text-gray-900">
              Following
            </Link>
            <Link to={`/profile`} className="font-medium hover:text-gray-900">
              Profile
            </Link>
          </Fragment>)}
        </nav>
        {!isUserLoggedIn && (
          <div className="items-center h-full">
            <button
              onClick={openLoginPopup}
              className="mr-5 font-medium hover:text-gray-900"
            >
              Login
            </button>
            <button
              onClick={openRegisterPopup}
              className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-blinks-primary rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
            >
              Sign Up
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
