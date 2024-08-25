import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-96">
      <div className="relative w-12 h-12">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-t-4 border-blue-500 rounded animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
