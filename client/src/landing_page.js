// src/LandingPage.js
import React from "react";
import { Link } from "react-router-dom";
import BlinksSVGLogo from "./components/BlinksSVGLogo";
import MediaPlayerSVG from "./components/MediaPlayerSVG";

function LandingPage() {
  return (
    <div
      className="h-screen flex flex-col bg-right bg-cover"
      style={{ backgroundImage: "url('bg.svg')" }}
    >
      {/* Nav */}
      <div className="w-full flex items-center justify-center p-6 bg-opacity-75 bg-white">
        <Link
          className="flex items-center text-blinks-yellow no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          to={`/explore`}
        >
          <img src="/blinks.png" alt="blinks" className="w-8 mr-2" />
          <BlinksSVGLogo className={"w-16"} />
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 justify-center items-center px-6">
        <div className="flex flex-col md:flex-row items-center max-w-7xl w-full">
          {/* Left Col */}
          <div className="flex flex-col w-full md:w-2/5 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl text-blinks-blue font-bold leading-tight mb-4">
              Discover the Future of Short-Form Videos
            </h1>
            <p className="text-base md:text-2xl mb-8 text-gray-700">
              Join Blinks to explore and share quick, engaging content with an
              innovative community.
            </p>
            <Link
              to={`/explore`}
              className="bg-blinks-primary text-blinks-secondary text-center px-6 py-3 rounded-full text-lg font-semibold hover:bg-blinks-blue hover:text-white transition"
            >
              Get Started
            </Link>
          </div>

          {/* Right Col */}
          <div className="w-full md:w-3/5 flex justify-center">
            <MediaPlayerSVG className="w-full md:w-[70%] max-w-sm" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full py-6 text-sm text-center bg-opacity-75 bg-white">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} BlinksMedia. This is a learning
          project created by{" "}
          <Link
            to={`https://linkedin.com/in/ritikchourasiya`}
            className="text-blinks-primary underline italic"
          >
            Ritik Chourasiya
          </Link>{" "}
          with 💚.
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
