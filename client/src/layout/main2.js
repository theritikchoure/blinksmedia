import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import BottomNavigation from "../components/BottomNavigation";
import ScrollToTopButton from "../components/ScrollToTopButton";
import VideoUpload from "../components/VideoUpload";
import { AuthContext } from "../context/AuthenticationContext";
import LoadingSpinner from "../components/LoadingSpinner";

const Layout = ({ children }) => {
  
  const { isUserLoggedIn } = useContext(AuthContext);

  return (
    <div className="flex flex-col h-screen">
      {/* Top Navigation */}
      <NavBar />
      <div className="flex flex-1">
        {/* Main Content Area */}
        <main className="flex-1 ml-0 mt-16 overflow-auto bg-light-gray mb-20 md:mb-0">
          <div className="mx-auto w-full md:w-10/12">
          {children}
          </div>
        </main>
      </div>
      <BottomNavigation />
      {isUserLoggedIn && <ScrollToTopButton />}
    </div>
  );
};

export default Layout;


