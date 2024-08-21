// src/pages/HomePage.js

import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import VideoPlayer from "../components/VideoPlayer.js";

const HomePage = () => {
  const videos = [
    {
      id: 1,
      url: "https://www.example.com/video1.mp4",
      description: "Check out this cool video!",
      likes: 120,
      comments: 45,
      shares: 20,
    },
    {
      id: 2,
      url: "https://www.example.com/video2.mp4",
      description: "Another amazing video!",
      likes: 300,
      comments: 78,
      shares: 40,
    },
    // Add more videos here...
  ];

  return (
    <Box sx={{ height: "100vh", overflowY: "scroll", backgroundColor: "#000" }}>
      {videos.map((video) => (
        <Box key={video.id} sx={{ position: "relative", mb: 4 }}>
          <VideoPlayer url={video.url} />
          <Box
            sx={{ position: "absolute", bottom: 16, left: 16, color: "#fff" }}
          >
            <Typography variant="body1">{video.description}</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <IconButton color="inherit">
                <FavoriteIcon />
              </IconButton>
              <Typography variant="caption">{video.likes}</Typography>
              <IconButton color="inherit">
                <CommentIcon />
              </IconButton>
              <Typography variant="caption">{video.comments}</Typography>
              <IconButton color="inherit">
                <ShareIcon />
              </IconButton>
              <Typography variant="caption">{video.shares}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default HomePage;
