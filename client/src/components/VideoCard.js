import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <div className="each mb-2 m-2 border border-gray-300 bg-gray-100 relative">
      <Link to={`/video/${video.slug}`}>
        <img
          className="w-full"
          // src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
          src={video.thumbnail_url}
          alt=""
          title={video.title}
        />
      </Link>
      {video.status === "LIVE" && (
        <div className="badge absolute top-0 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
          Live
        </div>
      )}
      {/* <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
        <span className="mr-1 p-1 px-2 font-bold">105 Watching</span>
        <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
          105 Likes
        </span>
        <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
          105 Dislikes
        </span>
      </div> */}
      <div className="desc p-3 text-gray-800">
        <Link
          to={`/video/${video.slug}`}
          className="title font-bold block cursor-pointer hover:underline"
          title={video.title}
        >
          {video.title}
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
