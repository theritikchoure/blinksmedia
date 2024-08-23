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

  const toggleMute = () => {
    setMuted(!muted);
  };

  const handlePlaying = () => {
    setPlaying(!playing);
  };

  const handleBlinksIn = () => {
    setBlinksIn(!blinksIn);
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
      //   setPlay(true);
    }, 1000);
  }, []);

  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    // Function to handle arrow key presses
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown") {
        handleVideoChangeIndex("down");
      } else if (event.key === "ArrowUp") {
        handleVideoChangeIndex("up");
      }
    };

    // Add event listeners for arrow keys
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleOnReady = () => {
    console.log(`Video at index ${index} is ready to play.`);
    setLoading(false); // Set loading to false when the video is ready
  };

  return (
    <Fragment>
      <div
        class={`${
          index === currentIndex ? "flex" : "hidden"
        } items-center justify-center bg-gray-100`}
        // class={`flex items-center justify-center bg-gray-100`}
        // ref={containerRef}
      >
        {loading ? (
          <ShimmerLoader />
        ) : (
          <div class="each m-2 border-gray-800 relative bg-gray-100 w-[18rem] md:w-[20rem]">
            <div class="relative w-full h-full">
              <div className="cursor-pointer">
                <ReactPlayer
                  url={video.url}
                  playing={playing}
                  loop={true}
                  // controls={true}
                  muted={false} // Add this line
                  width="100%"
                  height="100%"
                  // onReady={handleOnReady} // Handle the onReady event
                />
              </div>
              {/* Overlay for sound toggle */}
              {/* <div className="absolute top-4 right-4 z-50" title="mute/unmute">
                <button
                  onClick={toggleMute}
                  className="bg-gray-700 text-white p-2 rounded-full"
                >
                  {muted ? (
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
                  ) : (
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
                        d="M15.59 7.41L14.17 9 16 10.83 14.83 12l1.17 1.17-1.42 1.42L12 12l-4.83 4.83a1.004 1.004 0 01-1.42 0l-1.41-1.41a1.004 1.004 0 010-1.42L9 12 7.41 10.59 6 9l1.17-1.17 1.42-1.42L12 10.83l4.59-4.59z"
                      />
                    </svg>
                  )}
                </button>
              </div> */}
              {/* Overlay for play/pause toggle */}
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={handlePlaying}
              >
                {!playing && (
                  <button
                    className="bg-black text-white p-2 rounded-full opacity-60"
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
              <div class="badge w-4/5 flex flex-col gap-3 absolute bottom-2 left-0 m-1 text-white font-semibold px-2 text-sm">
                <div id="creator-user">
                  <div className="flex flex-row gap-2">
                    <img
                      alt="blinks"
                      className="w-6 h-6 rounded-full"
                      src="https://images.pexels.com/photos/1535162/pexels-photo-1535162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <p>creator_name</p>
                    <button
                      className="text-white border-2 bg-transparent border-white px-2 rounded-md"
                      onClick={handleBlinksIn}
                    >
                      {blinksIn ? "BlinksIn" : "Blinked"}
                      {/* Blinked */}
                    </button>
                  </div>
                </div>
                <div
                  onClick={toggleText}
                  className={`video-description cursor-pointer ${
                    isExpanded
                      ? "whitespace-normal"
                      : "overflow-hidden whitespace-nowrap text-ellipsis"
                  }`}
                >
                  {video.description}
                </div>
              </div>
            </div>
            <div class="absolute right-3 sm:-right-14 bottom-0 transform  flex flex-col items-center space-y-4">
              {/* <!-- Like Icon with Number --> */}
              <div class="flex flex-col items-center cursor-pointer">
                <div class="p-2 bg-gray-300 rounded-full">
                  <svg
                    class="w-5 h-5 text-black"
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
                <span class="text-sm text-black font-semibold mt-1">12.3K</span>
              </div>

              {/* <!-- Share Icon with Number --> */}
              <div
                class="flex flex-col items-center cursor-pointer"
                onClick={() => setIsSharing(true)}
              >
                <div class="p-2 bg-gray-300 rounded-full">
                  <svg
                    className="w-5 h-5"
                    viewBox="-0.5 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M13.47 4.13998C12.74 4.35998 12.28 5.96 12.09 7.91C6.77997 7.91 2 13.4802 2 20.0802C4.19 14.0802 8.99995 12.45 12.14 12.45C12.34 14.21 12.79 15.6202 13.47 15.8202C15.57 16.4302 22 12.4401 22 9.98006C22 7.52006 15.57 3.52998 13.47 4.13998Z"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </div>
                <span class="text-sm text-black font-semibold mt-1">5.7K</span>
              </div>
            </div>
          </div>
        )}
      </div>
      {isSharing && (
        <ShareModal
          closeModal={() => setIsSharing(false)}
          description={video.description}
          url={`${window.location}/${video?.video_id}`}
        />
      )}
    </Fragment>
  );
};

export default ForYouCard;
