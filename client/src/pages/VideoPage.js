import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom"; // Import useParams
import Layout from "../layout/main";
import ReactPlayer from "react-player";
import Hls from "hls.js";
import LoadingSpinner from "../components/LoadingSpinner";
import axiosInstance from "../global/api";

const SingleVideoPage = () => {
  const { slug } = useParams(); // Get the video slug from the URL
  const playerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoData, setVideoData] = useState(null); // State to store video data
  const [relatedVideos, setRelatedVideos] = useState([]); // State to store video data

  useEffect(() => {
    // Fetch video by slug
    const fetchVideo = async () => {
      try {
        const response = await axiosInstance.get(`/application/videos/${slug}`);
        console.log(response)
        setVideoData(response.data.data.video); // Assuming your API returns the video data
        setRelatedVideos(response.data.data.relatedVideos); // Assuming your API returns the video data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching video:", error);
        setLoading(false);
      }
    };

    fetchVideo();
  }, [slug]);

  useEffect(() => {
    if (Hls.isSupported() && playerRef.current && videoData?.videoSrc) {
      const hls = new Hls();
      hls.loadSource(videoData.videoSrc);
      hls.attachMedia(playerRef.current.getInternalPlayer());

      // Cleanup when the component is unmounted
      return () => {
        hls.destroy();
      };
    }
  }, [videoData]);

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-screen">
          <LoadingSpinner />
        </div>
      </Layout>
    );
  }

  if (!videoData) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-screen">
          <p>Video not found</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-8 p-4 md:p-10">
        {/* Video Player and Details */}
        <div className="flex-1">
          <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden shadow-lg">
            <ReactPlayer
              className="absolute top-0 left-0 "
              ref={playerRef}
              url={videoData.video_url}
              width="100%"
              height="100%"
              controls
              light={videoData.thumbnail_url} // Assuming your API provides a thumbnail URL
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
            <h1 className="text-2xl font-bold text-gray-900">
              {videoData.title}
            </h1>
            <div className="mt-4">
              <p className="text-gray-800">{videoData.description}</p>
            </div>
          </div>
        </div>

        {/* Related Videos */}
        <div className="w-full lg:w-1/4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Related Videos
          </h2>
          <ul>
            {relatedVideos.map((video, index) => (
              <li
                key={index}
                className="flex mb-4 border-b border-gray-300 pb-2"
              >
                <div className="w-2/4 bg-gray-200 flex-shrink-0 rounded-lg overflow-hidden">
                  {/* Replace ReactPlayer with an image tag for the thumbnail */}
                  <img
                    src={video.thumbnail_url} // Use the thumbnail URL here
                    alt={`Thumbnail for Related Video ${index + 1}`}
                    className="w-full h-full object-cover cursor-pointer"
                    title={video.title}
                  />
                </div>
                <div className="ml-4 flex flex-col justify-center">
                  <Link
                    className="text-gray-900 font-semibold cursor-pointer"
                    title={video.title}
                  >
                    {index + 1}. {video.title}
                  </Link>
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
