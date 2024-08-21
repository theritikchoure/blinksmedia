import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      {/* Top Navigation */}
      <NavBar />
      <div className="flex h-screen">
        {/* Side Navigation */}
        <SideBar />
        {/* Main Content Area */}
        <main className="flex-1 ml-0 md:ml-52 mt-16 overflow-auto bg-light-gray p-4">
          {children}         
        </main>
      </div>
    </Fragment>
  );
};

export default Layout;


