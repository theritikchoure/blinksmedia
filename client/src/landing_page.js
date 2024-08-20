// src/LandingPage.js
import React from "react";

function LandingPage() {
  return (
    <div
      className="h-screen pb-14 bg-right bg-cover"
      style={{ backgroundImage: "url('bg.svg')" }}
    >
      {/* Nav */}
      <div className="w-full container mx-auto p-6">
        <div className="w-full flex items-center justify-between">
          <a
            className="flex items-center text-blinks-yellow no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            <svg
              className="h-8 fill-current text-blinks-yellow pr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z" />
            </svg>{" "}
            BlinksMedia
          </a>
        </div>
      </div>

      {/* Main */}
      <div className="container pt-20 md:pt-20 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/* Left Col */}
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-blinks-blue font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
            Discover the Future of Short-Form Videos
          </h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle text-gray-700">
            Join BlinksMedia to explore and share quick, engaging content with
            an innovative community.
          </p>

          <a
            href="#signup"
            className="bg-blinks-yellow text-center text-charcoal-gray px-6 py-3 rounded-full text-lg font-semibold hover:bg-blinks-blue hover:text-white transition"
          >
            Get Started
          </a>
        </div>

        {/* Right Col */}
        <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
          <img
            className="w-5/6 mx-auto lg:mr-0 slide-in-bottom"
            src="https://tailwindtoolbox.github.io/App-Landing-Page/devices.svg"
            alt="BlinksMedia Demo"
          />
        </div>

        {/* Footer */}
        <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
          <a className="text-gray-500 no-underline hover:no-underline" href="#">
            &copy; {new Date().getFullYear()} BlinksMedia. All rights reserved.
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
