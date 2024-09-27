import React, { useState, useEffect, useRef } from "react";
import Layout from "../layout/main2";
import Card from "./card";
import ShimmerLoader from "../components/ShimmerLoader";

const rawVideoData = [
  {
    _id: "66f439e43727c98cf473d200",
    title: "Test video 5",
    description: "Test video 5",
    status: "published",
    video_url:
      "https://res.cloudinary.com/ditzlnzmw/video/upload/v1727281632/original-videos/test.mp4",
    slug: "test-video-5",
    thumbnail_url:
      "https://res.cloudinary.com/ditzlnzmw/image/upload/v1727281634/thumbnails/s2agckmlygn8xaymucjm.webp",
    createdAt: "2024-09-25T16:27:16.746Z",
    updatedAt: "2024-09-25T16:27:16.746Z",
    __v: 0,
  },
];

const ExplorePage = () => {
  const [videoData, setVideoData] = useState(rawVideoData);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    // Function to load more videos
    const loadMoreVideos = () => {
      setLoading(true);
      // Simulate fetching more videos
      setTimeout(() => {
        setVideoData((prevData) => [...prevData, ...rawVideoData]);
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
      <div className="holder p-5 mx-auto w-full md:w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videoData.map((item, index) => (
          <Card key={index} video={item} />
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
