import React, { useState, useEffect, Fragment } from "react";
import VideoUpload from "./VideoUpload";
import { Link } from "react-router-dom";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleCreateVideo = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Fragment>
      <div className="hidden md:block fixed bottom-4 right-4">
        <Link to={"/upload"}>
          <button
            onClick={handleCreateVideo}
            className="p-3 rounded-full bg-blinks-primary text-white shadow-md hover:bg-blinks-blue transition-transform transform hover:scale-110"
            aria-label="Scroll to top"
            id="upload-button"
          >
            <svg
              className="w-7"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18M12 6V18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>
      </div>

      {isVisible && <VideoUpload onClose={handleCreateVideo} />}
    </Fragment>
  );
};

export default ScrollToTopButton;
