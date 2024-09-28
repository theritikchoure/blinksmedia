import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthenticationContext";

const BottomNavigation = () => {
  const { isUserLoggedIn } = useContext(AuthContext);
  return (
    <div className="md:hidden fixed bottom-0 w-full px-7 bg-white shadow-lg rounded-2xl">
      <div className="flex">
        <div className="flex-1 group">
          <Link
            to={`/`}
            className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
          >
            <span className="block px-1 pt-1 pb-2">
              <span className="inline-flex justify-center items-center">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
              </span>
              <span className="block text-xs pb-1">App</span>
            </span>
          </Link>
        </div>
        <div className="flex-1 group">
          <Link
            to={`/system-design`}
            className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
          >
            <span className="block px-1 pt-1 pb-2">
              <span className="inline-flex justify-center items-center">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H10M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V10M9 17H11.5M9 13H14M9 9H10M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="block text-xs pb-1">System design</span>
            </span>
          </Link>
        </div>
        <div className="flex-1 group">
          <Link
            to={`https://blinksmedia-production.up.railway.app/api-docs`}
            target="_blank"
            className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
          >
            <span className="block px-1 pt-1 pb-2">
              <span className="inline-flex justify-center items-center">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8.2C3 7.07989 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H9.67452C10.1637 5 10.4083 5 10.6385 5.05526C10.8425 5.10425 11.0376 5.18506 11.2166 5.29472C11.4184 5.4184 11.5914 5.59135 11.9373 5.93726L12.0627 6.06274C12.4086 6.40865 12.5816 6.5816 12.7834 6.70528C12.9624 6.81494 13.1575 6.89575 13.3615 6.94474C13.5917 7 13.8363 7 14.3255 7H17.8C18.9201 7 19.4802 7 19.908 7.21799C20.2843 7.40973 20.5903 7.71569 20.782 8.09202C21 8.51984 21 9.0799 21 10.2V15.8C21 16.9201 21 17.4802 20.782 17.908C20.5903 18.2843 20.2843 18.5903 19.908 18.782C19.4802 19 18.9201 19 17.8 19H6.2C5.07989 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="block text-xs pb-1">
                API Swagger
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;







// Cache if possible

// nginx ulimit increase

