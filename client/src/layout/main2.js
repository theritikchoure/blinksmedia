import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import BottomNavigation from "../components/BottomNavigation";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Navigation */}
      <NavBar />
      <div className="flex flex-1">
        {/* Side Navigation */}
        {/* <SideBar /> */}
        {/* Main Content Area */}
        <main className="flex-1 ml-0 mt-16 overflow-auto bg-light-gray p-4">
          {children}
        </main>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Layout;


