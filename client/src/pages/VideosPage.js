import React, { useState, useEffect, useRef } from "react";
import Layout from "../layout/main";
import VideoCard from "../components/VideoCard";
import axiosInstance from "../global/api";

const ExplorePage = () => {
  const [videoData, setVideoData] = useState([]);
  
  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    try {
      let response = await axiosInstance.get("/application/videos");

      setVideoData(response.data.data)

      console.log(response.data.data);
    } catch (error) {
      
    }
  }
  
  
  return (
    <Layout>
      <div className="holder p-2 py-5 mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videoData.map((item, index) => (
          <VideoCard key={index} video={item} />
        ))}
      </div>
    </Layout>
  );
};

export default ExplorePage;
