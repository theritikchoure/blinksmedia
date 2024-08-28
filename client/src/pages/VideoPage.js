import React, { useEffect, useState } from "react";
import Layout from "../layout/main2";
import ReactPlayer from "react-player";
import LoadingSpinner from "../components/LoadingSpinner";

const SingleVideoPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching or authentication check
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the timeout as necessary

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

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
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Video Player and Details */}
        <div className="flex-1">
          <div className="bg-black">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Kr5iu_mSTSI"
              width="100%"
              height="450px"
              controls
            />
          </div>
          <div className="mt-4">
            <h1 className="text-2xl font-bold text-gray-900">Video Title</h1>
            {/* <p className="text-gray-600">1M views • 1 day ago</p> */}
            {/* <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-gray-700 h-10 w-10 rounded-full"></div>
                <div className="ml-3">
                  <p className="text-gray-900 font-semibold">Channel Name</p>
                  <p className="text-gray-600 text-sm">1M subscribers</p>
                </div>
              </div>
              <button className="bg-red-600 text-white px-4 py-2 rounded-full">
                Subscribe
              </button>
            </div> */}
            <div className="mt-6">
              <p className="text-gray-800">
                This is a description of the video. It can be multiple lines and
                provide information about the video content.
              </p>
            </div>
          </div>
        </div>

        {/* Related Videos */}
        <div className="w-full lg:w-72">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Related Videos
          </h2>
          <ul>
            {[...Array(10)].map((_, index) => (
              <li key={index} className="flex mb-4">
                <div className="w-24 bg-gray-200 flex-shrink-0">
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
                  <p className="text-gray-600 text-sm">Channel Name</p>
                  <p className="text-gray-500 text-xs">
                    100k views • 3 days ago
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
