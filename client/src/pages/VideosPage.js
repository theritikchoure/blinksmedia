import React, { useState, useEffect, useRef } from "react";
import Layout from "../layout/main2";
// import Card from "./card";
import ShimmerLoader from "../components/ShimmerLoader";
import VideoCard from "../components/VideoCard";

const rawVideoData = [
  {
    video_id: "vid_001",
    url: "https://assets.mixkit.co/videos/1173/1173-720.mp4",
    // url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    title: "A scenic view of mountains during sunset.",
  },
  {
    video_id: "vid_002",
    url: "https://assets.mixkit.co/videos/1164/1164-720.mp4",
    title: "A serene beach with waves gently crashing.",
  },
  {
    video_id: "vid_003",
    url: "https://assets.mixkit.co/videos/32809/32809-720.mp4",
    title: "A bustling cityscape with bright lights at night.",
  },
  {
    video_id: "vid_004",
    url: "https://assets.mixkit.co/videos/34375/34375-720.mp4",
    title: "A close-up of a blooming flower in a garden.",
  },
  {
    video_id: "vid_005",
    url: "https://assets.mixkit.co/videos/34378/34378-720.mp4",
    title: "A waterfall flowing through a lush forest.",
  },
  {
    video_id: "vid_006",
    url: "https://assets.mixkit.co/videos/34564/34564-720.mp4",
    title: "A time-lapse of clouds moving over a mountain.",
  },
  {
    video_id: "vid_007",
    url: "https://assets.mixkit.co/videos/34562/34562-720.mp4",
    title: "A vibrant sunset over a calm lake.",
  },
  {
    video_id: "vid_008",
    url: "https://assets.mixkit.co/videos/34563/34563-720.mp4",
    title: "A drone view of a winding river through a valley.",
  },
  {
    video_id: "vid_009",
    url: "https://assets.mixkit.co/videos/34565/34565-720.mp4",
    title: "A night sky filled with twinkling stars.",
  },
  {
    video_id: "vid_010",
    url: "https://assets.mixkit.co/videos/34560/34560-720.mp4",
    title: "A city skyline during golden hour.",
  },
  {
    video_id: "vid_011",
    url: "https://assets.mixkit.co/videos/34560/34560-720.mp4",
    title: "A city skyline during golden hour.",
  },
  {
    video_id: "vid_012",
    url: "https://assets.mixkit.co/videos/34560/34560-720.mp4",
    title: "A city skyline during golden hour.",
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
      <div className="holder mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videoData.map((item, index) => (
          <VideoCard key={index} video={item} />
        ))}
        {/* Placeholder for loading indicator */}
      </div>
      {loading && (
        <div className="holder mx-auto grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
