import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthenticationContext";

const BottomNavigation = () => {
  const { isUserLoggedIn } = useContext(AuthContext);
  return (
    <div class="md:hidden fixed bottom-0 w-full px-7 bg-white shadow-lg rounded-2xl">
      <div class="flex">
        <div class="flex-1 group">
          <Link
            to={`/for-you`}
            class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
          >
            <span class="block px-1 pt-1 pb-2">
              <span class="inline-flex justify-center items-center">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
              </span>
              <span class="block text-xs pb-1">For you</span>
            </span>
          </Link>
        </div>
        <div class="flex-1 group">
          <Link
            to={`/explore`}
            class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
          >
            <span class="block px-1 pt-1 pb-2">
              <span class="inline-flex justify-center items-center">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  ></path>
                </svg>
              </span>
              <span class="block text-xs pb-1">Explore</span>
            </span>
          </Link>
        </div>
        {isUserLoggedIn && (<Fragment>
          <div class="flex-1 group">
            <button
              href="#"
              class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-blinks-primary border-b-2 border-transparent group-hover:border-blinks-primary"
            >
              <span class="block px-1 pt-1 pb-2">
                <span class="inline-flex justify-center items-center">
                  <svg
                    className="w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18M12 6V18"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span class="block text-xs pb-1">Blink</span>
              </span>
            </button>
          </div>
          <div class="flex-1 group">
            <a
              href="#"
              class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
            >
              <span class="block px-1 pt-1 pb-2">
                <span class="inline-flex justify-center items-center">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    ></path>
                  </svg>
                </span>
                <span class="block text-xs pb-1">Following</span>
              </span>
            </a>
          </div>
        </Fragment>)}
      </div>
    </div>
  );
};

export default BottomNavigation;







// Cache if possible

// nginx ulimit increase

