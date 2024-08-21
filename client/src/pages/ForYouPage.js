import React from 'react'
import Layout from '../layout/main2'

const ForYouPage = () => {
  return (
    <Layout>
      {/* Card */}
      <div class="flex items-center justify-center bg-gray-100">
        <div class="each mb-10 m-2 border-gray-800 relative">
          <div class="relative">
            <img
              class="w-96 h-auto object-cover rounded-md"
              src="https://images.pexels.com/photos/1535162/pexels-photo-1535162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div class="badge flex absolute bottom-2 left-2 m-1 text-gray-200 p-1 px-2 text-sm">
              <svg
                class="w-5"
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
          <div class="badge absolute top-0 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
            Live
          </div>
          <div class="desc text-black">
            <span class="description text-sm block py-2 border-gray-400 mb-2">
              lorem ipsum bekhum bukhum! lorem ipsum bekhum bukhum!
            </span>
          </div>
          <div class="absolute -right-14 bottom-0 transform -translate-y-1/2 flex flex-col items-center space-y-4">
            {/* <!-- Like Icon with Number --> */}
            <div class="flex flex-col items-center">
              <div class="p-2 bg-gray-300 rounded-full">
                <svg
                  class="w-6 h-6 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 4.248c-3.148-3.148-8.275-2.315-10.67 1.274-2.393 3.589-.495 8.401 3.09 10.448l6.428 5.154 6.427-5.154c3.586-2.047 5.484-6.859 3.09-10.448-2.395-3.589-7.522-4.422-10.67-1.274z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span class="text-sm text-black mt-1">12.3K</span>
            </div>

            {/* <!-- Share Icon with Number --> */}
            <div class="flex flex-col items-center">
              <div class="p-2 bg-gray-300 rounded-full">
                <svg
                  className="w-6 h-6"
                  viewBox="-0.5 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M13.47 4.13998C12.74 4.35998 12.28 5.96 12.09 7.91C6.77997 7.91 2 13.4802 2 20.0802C4.19 14.0802 8.99995 12.45 12.14 12.45C12.34 14.21 12.79 15.6202 13.47 15.8202C15.57 16.4302 22 12.4401 22 9.98006C22 7.52006 15.57 3.52998 13.47 4.13998Z"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
              <span class="text-sm text-black mt-1">5.7K</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ForYouPage