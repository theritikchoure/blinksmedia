// src/LandingPage.js
import React from "react";
import { Link } from "react-router-dom";
import BlinksSVGLogo from "./components/BlinksSVGLogo";
import MediaPlayerSVG from "./components/MediaPlayerSVG";

function LandingPage() {
  return (
    <div
      className="h-screen pb-14 bg-right bg-cover"
      style={{ backgroundImage: "url('bg.svg')" }}
    >
      {/* Nav */}
      <div className="w-full container mx-auto p-6">
        <div className="w-full flex items-center justify-between">
          <Link
            className="flex items-center text-blinks-yellow no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            to={`/`}
          >
            <img src="/blinks.png" className="w-8 mr-2" />

            <BlinksSVGLogo className={"w-16"} />
          </Link>
        </div>
      </div>

      {/* Main */}
      <div className="container px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/* Left Col */}
        <div className="flex flex-col w-full md:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-blinks-blue font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
            Discover the Future of Short-Form Videos
          </h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle text-gray-700">
            Join Blinks to explore and share quick, engaging content with an
            innovative community.
          </p>

          <Link
            to={`/for-you`}
            className="bg-blinks-primary text-center text-blinks-secondary px-6 py-3 rounded-full text-lg font-semibold hover:bg-blinks-blue hover:text-white transition"
          >
            Get Started
          </Link>
        </div>

        {/* Right Col */}
        <div className="w-full mt-20 md:mt-10 md:w-3/5 overflow-y-hidden">
          {/* <img
            className="w-5/6 mx-auto lg:mr-0 slide-in-bottom"
            src="https://tailwindtoolbox.github.io/App-Landing-Page/devices.svg"
            alt="BlinksMedia Demo"
          /> */}
          <MediaPlayerSVG className="md:w-[40%] mx-auto slide-in-bottom" />
        </div>

        {/* Footer */}
        <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
          <p className="text-gray-500 no-underline hover:no-underline">
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
    </div>
  );
}

export default LandingPage;


