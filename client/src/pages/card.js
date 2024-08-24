import React, { useState } from "react";
import ReactPlayer from "react-player";

const Card = ({link}) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div class="each md:mb-10 m-2 border-gray-800 relative">
      <div
        className="relative hover:cursor-pointer"
        onMouseEnter={() => setPlaying(true)}
        onMouseLeave={() => setPlaying(false)}
      >
        {/* <img
        class="w-full rounded-md"
        src="https://images.pexels.com/photos/1535162/pexels-photo-1535162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        /> */}
        <ReactPlayer
          url={link}
          playing={playing}
          loop={true}
          controls={false}
          muted={true} // Add this line
          width="100%"
          height="100%"
        />
        <div class="badge flex absolute bottom-2 left-2 m-1 text-gray-200 p-1 px-2 text-sm">
          <svg
            className="w-5"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M59 61.922c0-9.768 13.016-15.432 22.352-11.615 10.695 7.017 101.643 58.238 109.869 65.076 8.226 6.838 10.585 17.695-.559 25.77-11.143 8.074-99.712 60.203-109.31 64.73-9.6 4.526-21.952-1.632-22.352-13.088-.4-11.456 0-121.106 0-130.873zm13.437 8.48c0 2.494-.076 112.852-.216 115.122-.23 3.723 3 7.464 7.5 5.245 4.5-2.22 97.522-57.704 101.216-59.141 3.695-1.438 3.45-5.1 0-7.388C177.488 121.952 82.77 67.76 80 65.38c-2.77-2.381-7.563 1.193-7.563 5.023z"
              stroke="#fff"
              fill="#fff"
              fillRule="evenodd"
            />
          </svg>
          13.8M
        </div>
      </div>
      {/* <div class="badge absolute top-0 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
        Live
      </div> */}
      <div class="desc text-black">
        <span class="description text-sm block py-2 border-gray-400 mb-2">
          lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !
        </span>
      </div>
    </div>
  );
};

export default Card;

    // height: calc(-64px + 100vh);