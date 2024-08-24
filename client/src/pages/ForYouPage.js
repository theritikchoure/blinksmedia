import React, { useEffect, useRef, useState } from "react";
import Layout from "../layout/main2";
import ReactPlayer from "react-player";
import ShareModal from "../components/ShareModal";
import ForYouCard from "../components/for-you-card";
import LoginPopup from "../components/auth-popups/LoginPopup";

const rawVideoData = [
  {
    video_id: "vid_001",
    url: "https://assets.mixkit.co/videos/1173/1173-720.mp4",
    // url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    description: "A scenic view of mountains during sunset.",
  },
  {
    video_id: "vid_002",
    url: "https://assets.mixkit.co/videos/1164/1164-720.mp4",
    description: "A serene beach with waves gently crashing.",
  },
  {
    video_id: "vid_003",
    url: "https://assets.mixkit.co/videos/32809/32809-720.mp4",
    description: "A bustling cityscape with bright lights at night.",
  },
  {
    video_id: "vid_004",
    url: "https://assets.mixkit.co/videos/34375/34375-720.mp4",
    description: "A close-up of a blooming flower in a garden.",
  },
  {
    video_id: "vid_005",
    url: "https://assets.mixkit.co/videos/34378/34378-720.mp4",
    description: "A waterfall flowing through a lush forest.",
  },
  {
    video_id: "vid_006",
    url: "https://assets.mixkit.co/videos/34564/34564-720.mp4",
    description: "A time-lapse of clouds moving over a mountain.",
  },
  {
    video_id: "vid_007",
    url: "https://assets.mixkit.co/videos/34562/34562-720.mp4",
    description: "A vibrant sunset over a calm lake.",
  },
  {
    video_id: "vid_008",
    url: "https://assets.mixkit.co/videos/34563/34563-720.mp4",
    description: "A drone view of a winding river through a valley.",
  },
  {
    video_id: "vid_009",
    url: "https://assets.mixkit.co/videos/34565/34565-720.mp4",
    description: "A night sky filled with twinkling stars.",
  },
  {
    video_id: "vid_010",
    url: "https://assets.mixkit.co/videos/34560/34560-720.mp4",
    description: "A city skyline during golden hour.",
  },
];

const ForYouPage = () => {
  const [isSharing, setIsSharing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoData, setVideoData] = useState(rawVideoData);

  const containerRef = useRef(null);

  const handleScroll = (e) => {
    console.log("mouse");
    const direction = e.deltaY > 0 ? 1 : -1;
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      return Math.max(0, Math.min(newIndex, 10 - 1));
    });
  };

  const handleVideoChangeIndex = (direction) => {
    if (direction === "down") {
      let newCurrentIndex = currentIndex + 1;

      if (newCurrentIndex < videoData.length) {
        setCurrentIndex(newCurrentIndex);

        // Check if newCurrentIndex is the second-to-last index
        if (newCurrentIndex === videoData.length - 2) {
          // Append new video data
          const additionalVideoData = fetchAdditionalVideoData(); // Replace this with your data-fetching logic
          setVideoData((prevVideoData) => [
            ...prevVideoData,
            ...additionalVideoData,
          ]);
        }
      }
    } else if (direction === "up") {
      let newCurrentIndex = currentIndex - 1;
      if (newCurrentIndex >= 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  const fetchAdditionalVideoData = () => {
    return videoData;
 }

  return (
    <Layout>
      {/* Card */}
      {videoData.map((video, index) =>
        index === currentIndex ? (
          <ForYouCard
            key={index}
            video={video}
            index={index}
            currentIndex={currentIndex}
            handleVideoChangeIndex={handleVideoChangeIndex}
          />
        ) : null
      )}
      {/* {videoData.map((video, index) =>
        <ForYouCard
            key={index}
            video={video}
            index={index}
            currentIndex={currentIndex}
            handleVideoChangeIndex={handleVideoChangeIndex}
          />
      )} */}

      {isSharing && <ShareModal closeModal={() => setIsSharing(false)} />}

      {/* <LoginPopup /> */}
    </Layout>
  );
};

export default ForYouPage;
