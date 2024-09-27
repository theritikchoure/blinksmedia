import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <div class="each mb-2 m-2 border border-gray-300 bg-gray-100 relative">
      <Link to={`/video/${video.slug}`}>
        <img
          class="w-full"
          // src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
          src={video.thumbnail_url}
          alt=""
        />
      </Link>
      {video.status === "LIVE" && (
        <div class="badge absolute top-0 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
          Live
        </div>
      )}
      <div class="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
        <span class="mr-1 p-1 px-2 font-bold">105 Watching</span>
        <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">
          105 Likes
        </span>
        <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">
          105 Dislikes
        </span>
      </div>
      <div class="desc p-4 text-gray-800">
        <Link
          to={`/video/${video.slug}`}
          class="title font-bold block cursor-pointer hover:underline"
        >
          {video.title}
        </Link>
        {/* <span class="description text-sm block py-2 border-gray-400 mb-2">
          lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !
        </span> */}
      </div>
    </div>
  );
};

export default VideoCard;
