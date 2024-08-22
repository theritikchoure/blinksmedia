import React from "react";
import './shimmer.css';

const ShimmerLoader = () => {
  return (
    <div className="shimmer-card shimmer">
      <div className="w-full h-[33rem] bg-gray-300 rounded-t-md"></div>{" "}
      {/* Shimmer for image */}
      <div className="p-4">
        <div className="w-3/4 h-4 mb-2 bg-gray-300 rounded-sm"></div>{" "}
        {/* Shimmer for description */}
      </div>
    </div>
  );
};

export default ShimmerLoader;
