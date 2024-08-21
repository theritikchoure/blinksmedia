// src/components/VideoPlayer.js

import React from "react";
import ReactPlayer from "react-player";
import { Box } from "@mui/material";

const VideoPlayer = ({ url }) => {
  return (
    <Box sx={{ position: "relative", width: "100%", paddingTop: "177.78%" }}>
      <ReactPlayer
        url={url}
        playing
        loop
        controls={false}
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
    </Box>
  );
};

export default VideoPlayer;
