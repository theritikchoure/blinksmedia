import React, { useEffect, useRef, useState } from "react";
import Layout from "../layout/main";
import ReactPlayer from "react-player";
import Hls from "hls.js";
import LoadingSpinner from "../components/LoadingSpinner";

const SingleVideoPage = () => {

  const playerRef = useRef(null);
  
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  let videoSrc =
    "https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"; // Your HLS stream

  useEffect(() => {
    // Simulate data fetching or authentication check
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the timeout as necessary

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

   useEffect(() => {
     if (Hls.isSupported() && playerRef.current) {
       const hls = new Hls();
       hls.loadSource(videoSrc);
       hls.attachMedia(playerRef.current.getInternalPlayer());

       // Cleanup when the component is unmounted
       return () => {
         hls.destroy();
       };
     } else {
       videoSrc =
         "https://res.cloudinary.com/ditzlnzmw/video/upload/v1727281632/original-videos/test.mp4";
     }
   }, [videoSrc]);

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-screen">
          <LoadingSpinner />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-8 p-4 md:p-10">
        {/* Video Player and Details */}
        <div className="flex-1">
          <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
            <ReactPlayer className="absolute top-0 left-0"
              ref={playerRef}
              url={videoSrc}
              width="100%"
              height="100%"
              controls
              light="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
              playing={isPlaying}
              onClickPreview={() => setIsPlaying(true)}
              playIcon={
                <button className="bg-red-500 rounded-full p-3">
                  <svg
                    className="w-10 h-10 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.46484 3.92349C4.79896 3.5739 4 4.05683 4 4.80888V19.1911C4 19.9432 4.79896 20.4261 5.46483 20.0765L19.1622 12.8854C19.8758 12.5108 19.8758 11.4892 19.1622 11.1146L5.46484 3.92349ZM2 4.80888C2 2.55271 4.3969 1.10395 6.39451 2.15269L20.0919 9.34382C22.2326 10.4677 22.2325 13.5324 20.0919 14.6562L6.3945 21.8473C4.39689 22.8961 2 21.4473 2 19.1911V4.80888Z"
                      fill="#ffffff"
                    />
                  </svg>
                </button>
              }
            />
          </div>
          <div className="mt-4">
            <h1 className="text-2xl font-bold text-gray-900">Video Title</h1>
            <div className="mt-4">
              <p className="text-gray-800">
                This is a description of the video. It can be multiple lines and
                provide information about the video content.
              </p>
            </div>
          </div>
        </div>

        {/* Related Videos */}
        <div className="w-full lg:w-1/4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Related Videos
          </h2>
          <ul>
            {[...Array(5)].map((_, index) => (
              <li
                key={index}
                className="flex mb-4 border-b border-gray-300 pb-2"
              >
                <div className="w-24 bg-gray-200 flex-shrink-0 rounded-lg overflow-hidden">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=Kr5iu_mSTSI"
                    width="100%"
                    height="100%"
                    light
                  />
                </div>
                <div className="ml-4 flex flex-col justify-center">
                  <p className="text-gray-900 font-semibold">
                    Related Video {index + 1}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default SingleVideoPage;
