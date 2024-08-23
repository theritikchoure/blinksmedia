import React, { useState, useEffect, useRef } from "react";
import Layout from "../layout/main2";
import Card from "./card";
import ShimmerLoader from "../components/ShimmerLoader";

const initialVideoData = [
  "https://assets.mixkit.co/videos/1173/1173-720.mp4",
  "https://assets.mixkit.co/videos/1164/1164-720.mp4",
  "https://assets.mixkit.co/videos/32809/32809-720.mp4",
  "https://assets.mixkit.co/videos/34375/34375-720.mp4",
  "https://assets.mixkit.co/videos/34378/34378-720.mp4",
  "https://assets.mixkit.co/videos/34564/34564-720.mp4",
  "https://assets.mixkit.co/videos/34562/34562-720.mp4",
  "https://assets.mixkit.co/videos/34563/34563-720.mp4",
  "https://assets.mixkit.co/videos/34565/34565-720.mp4",
  "https://assets.mixkit.co/videos/34560/34560-720.mp4",
  "https://assets.mixkit.co/videos/34560/34560-720.mp4",
  "https://assets.mixkit.co/videos/34560/34560-720.mp4",
  "https://assets.mixkit.co/videos/34560/34560-720.mp4",
  "https://assets.mixkit.co/videos/34560/34560-720.mp4",
  "https://assets.mixkit.co/videos/34560/34560-720.mp4",
  "https://assets.mixkit.co/videos/34560/34560-720.mp4",
];

const ExplorePage = () => {
  const [videoData, setVideoData] = useState(initialVideoData);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    // Function to load more videos
    const loadMoreVideos = () => {
      setLoading(true);
      // Simulate fetching more videos
      setTimeout(() => {
        setVideoData((prevData) => [...prevData, ...initialVideoData]);
        setLoading(false);
      }, 1000); // Simulate network delay
    };

    // Set up Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !loading) {
          loadMoreVideos();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loading]);

  return (
    <Layout>
      {/* Explore page */}
      <div className="holder mx-auto w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videoData.map((item, index) => (
          <Card key={index} link={item} />
        ))}
        {/* Placeholder for loading indicator */}
      </div>
      {loading && (
        <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {["", "", "", "", ""].map(() => (
            <ShimmerLoader />
          ))}
        </div>
      )}
      {/* Sentinel for detecting bottom of the page */}
      {/* <div ref={observerRef} /> */}
    </Layout>
  );
};

export default ExplorePage;
