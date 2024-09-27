// src/Header.js
import React, { useState, useEffect } from "react";

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolledFromTop, setScrolledFromTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledFromTop(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 w-full flex items-center ${
        scrolledFromTop
          ? "bg-white bg-opacity-80 shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      } transition-all`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="w-60 max-w-full">
          <a
            className="flex items-center text-blinks-yellow no-underline hover:no-underline font-bold text-base"
            href="/"
          >
            <svg
              className="h-8 pr-2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* <!-- Play Button --> */}
              <path d="M8 5v14l11-7L8 5z" fill="#1F2937" />
              {/* <!-- Outer Circle --> */}
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#1F2937"
                strokeWidth="2"
              />
            </svg>{" "}
            BlinksMedia
          </a>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-4 lg:space-x-8">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className={`lg:hidden text-black focus:outline-none ${
              navbarOpen ? "navbarTogglerActive" : ""
            }`}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <nav
            className={`lg:flex lg:items-center ${
              navbarOpen ? "block" : "hidden"
            } lg:block`}
          >
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10">
              <li>
                <a
                  href="#home"
                  className="text-base font-medium text-black hover:text-blinks-yellow"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-base font-medium text-black hover:text-blinks-yellow"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-base font-medium text-black hover:text-blinks-yellow"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-base font-medium text-black hover:text-blinks-yellow"
                >
                  Features
                </a>
              </li>
            </ul>
          </nav>
          <div className="hidden lg:flex space-x-4">
            <a
              href="#download"
              className="bg-blinks-yellow text-black px-6 py-2 rounded-md text-base font-medium hover:bg-blinks-blue"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
