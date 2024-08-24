import React, { useState, useEffect, Fragment } from "react";
import VideoUpload from "./VideoUpload";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleCreateVideo = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Fragment>
      <div className="hidden md:block fixed bottom-4 right-4">
        <button
          onClick={handleCreateVideo}
          className="p-3 rounded-full bg-blinks-primary text-white shadow-md hover:bg-blinks-blue transition-transform transform hover:scale-110"
          aria-label="Scroll to top"
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      {isVisible && <VideoUpload onClose={handleCreateVideo} />}
    </Fragment>
  );
};

export default ScrollToTopButton;
