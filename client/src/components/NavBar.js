// src/components/NavBar.js

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import BlinksSVGLogo from "./BlinksSVGLogo";
import { AuthPopupsContext } from "../context/AuthPopupsContext";

const NavBar = () => {
  
  const { openLoginPopup } = useContext(AuthPopupsContext);

  const [isOpen, setIsOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full h-16 bg-white text-gray-700 flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-10 border-b-2">
      <div class="container flex items-start justify-between p-4 mx-auto flex-row">
        <Link
          to={`/`}
          class="flex items-center font-medium text-gray-900 title-font"
        >
          <img src="/blinks.png" className="w-8 mr-2" />
          <BlinksSVGLogo className="w-auto h-5 text-gray-900 fill-current" />
        </Link>

        <nav class="hidden md:flex flex-wrap gap-5 items-center justify-center pl-24 text-base md:ml-auto md:mr-auto">
          <Link to={`/for-you`} class="font-medium hover:text-gray-900">
            For you
          </Link>
          <Link to={`/explore`} class="font-medium hover:text-gray-900">
            Explore
          </Link>
          <Link to={`/following`} class="font-medium hover:text-gray-900">
            Following
          </Link>

          <Link to={`/profile`} class="font-medium hover:text-gray-900">
            Profile
          </Link>
        </nav>
        <div class="hidden md:block items-center h-full">
          <button
            onClick={openLoginPopup}
            class="mr-5 font-medium hover:text-gray-900"
          >
            Login
          </button>
          <button class="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
