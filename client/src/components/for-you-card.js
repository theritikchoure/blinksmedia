import React, { Fragment, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { throttle } from "lodash";
import ShareModal from "./ShareModal";
import ShimmerLoader from "./ShimmerLoader";

const ForYouCard = ({ video, index, currentIndex, handleVideoChangeIndex }) => {
  const [isSharing, setIsSharing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const [blinksIn, setBlinksIn] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMute = () => {
    setMuted(!muted);
  };

  const handlePlaying = () => {
    setPlaying(!playing);
  };

  const handleBlinksIn = () => {
    setBlinksIn(!blinksIn);
  };

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown") {
        handleVideoChangeIndex("down");
      } else if (event.key === "ArrowUp") {
        handleVideoChangeIndex("up");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Fragment>
      <div
        className={`${
          index === currentIndex ? "flex" : "hidden"
        } flex-col items-center justify-center md:p-6 h-[calc(100vh-170px)]  md:h-[calc(100vh-100px)] w-full relative`}
      >
        {loading ? (
          <ShimmerLoader />
        ) : (
          <div className="relative bg-gray-100 h-full rounded-lg overflow-hidden shadow-lg">
            <div className="relative w-full h-full">
              <ReactPlayer
                url={video.url}
                playing={playing}
                loop={true}
                muted={muted}
                width="100%"
                height="100%"
                onReady={() => setLoading(false)}
              />
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={handlePlaying}
              >
                {!playing && (
                  <button
                    className="bg-black text-white p-2 rounded-full opacity-70"
                    title={playing ? "Pause" : "Play"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5v14l11-7L9 5z"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black to-transparent text-white">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex items-center space-x-2">
                  <img
                    alt="creator"
                    className="w-8 h-8 rounded-full"
                    src="https://images.pexels.com/photos/1535162/pexels-photo-1535162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                  <p className="text-sm font-semibold truncate">creator_name</p>
                </div>
                <button
                  className="text-white border-2 border-white px-2 py-1 rounded-md text-xs"
                  onClick={handleBlinksIn}
                >
                  {blinksIn ? "BlinksIn" : "Blinked"}
                </button>
              </div>
              <div
                onClick={toggleText}
                className={`video-description cursor-pointer text-sm ${
                  isExpanded
                    ? "whitespace-normal"
                    : "overflow-hidden whitespace-nowrap text-ellipsis"
                }`}
              >
                {video.description}
              </div>
            </div>
            <div className="absolute right-2 bottom-20 flex flex-col space-y-2">
              <div className="flex flex-col items-center cursor-pointer">
                <div className="p-2 bg-white rounded-full">
                  <svg
                    className="w-4 h-4 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 4.248c-3.148-3.148-8.275-2.315-10.67 1.274-2.393 3.589-.495 8.401 3.09 10.448l6.428 5.154 6.427-5.154c3.586-2.047 5.484-6.859 3.09-10.448-2.395-3.589-7.522-4.422-10.67-1.274z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xs text-white font-semibold mt-1">
                  12.3K
                </span>
              </div>
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setIsSharing(true)}
              >
                <div className="p-2 bg-white rounded-full">
                  <svg
                    className="w-4 h-4"
                    viewBox="-0.5 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.47 4.13998C12.74 4.35998 12.28 5.96 12.09 7.91C6.77997 7.91 2 13.4802 2 20.0802C4.19 14.0802 8.99995 12.45 12.14 12.45C12.34 14.21 12.79 15.6202 13.47 15.8202C15.57 16.4302 22 12.4401 22 9.98006C22 7.52006 15.57 3.52998 13.47 4.13998Z"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-xs text-white font-semibold mt-1">
                  5.7K
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      {isSharing && (
        <ShareModal
          closeModal={() => setIsSharing(false)}
          description={video.description}
          url={`${window.location}/video/${video?.video_id}`}
        />
      )}
    </Fragment>
  );
};

export default ForYouCard;
