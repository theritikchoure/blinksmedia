import React, { Fragment } from "react";
import Layout from "../layout/main2";
import Card from "./card";
import { Link } from "react-router-dom";

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

const ProfilePage = () => {
  return (
    <Layout>
      <div className="w-full md:w-10/12 mx-auto p-2 my-16">
        <div className="relative mb-8">
          <img
            src="https://images.pexels.com/photos/1535162/pexels-photo-1535162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Profile"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white"
          />
        </div>

        <h3 className="text-center text-xl font-semibold mb-4 mt-16">@username</h3>

        <div className="flex justify-around text-gray-600 mb-4">
          <div className="text-center">
            <span className="block font-bold text-lg">1.5k</span>
            <span className="text-xs">Followers</span>
          </div>
          <div className="text-center">
            <span className="block font-bold text-lg">120</span>
            <span className="text-xs">Following</span>
          </div>
          <div className="text-center">
            <span className="block font-bold text-lg">350</span>
            <span className="text-xs">Posts</span>
          </div>
        </div>

        <div className="text-center mb-4">
          <Link to={'/edit-profile'} className="bg-blinks-primary text-white py-2 px-4 rounded-lg hover:bg-blinks-blue">
            Edit profile
          </Link>
        </div>

        <div className="text-center text-gray-600">
          This is your public display name. It can be your real name or a
          pseudonym. You can only change this once every 30 days.
        </div>

        <div className="holder mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {rawVideoData.map((item, index) => (
            <Card key={index} video={item} />
          ))}
          {/* Placeholder for loading indicator */}
        </div>

        {/* <Fragment>
          <h3 className="text-xl font-semibold mb-2">Profile</h3>
          <p className="text-gray-600 mb-4">
            This is how others will see you on the site.
          </p>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value="shadcn"
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <p className="text-sm text-gray-500 mt-1">
              This is your public display name. It can be your real name or a
              pseudonym. You can only change this once every 30 days.
            </p>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <p className="text-gray-600">Select a verified email to display</p>
            <p className="text-sm text-gray-500">
              You can manage verified email addresses in your email settings.
            </p>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="bio"
            >
              Bio
            </label>
            <textarea
              id="bio"
              value="I own a computer."
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <p className="text-sm text-gray-500 mt-1">
              You can @mention other users and organizations to link to them.
            </p>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="urls"
            >
              URLs
            </label>
            <div className="space-y-2">
              <a
                href="https://shadcn.com"
                className="text-blue-500 hover:underline"
              >
                https://shadcn.com
              </a>
              <a
                href="http://twitter.com/shadcn"
                className="text-blue-500 hover:underline"
              >
                http://twitter.com/shadcn
              </a>
            </div>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
              Add URL
            </button>
          </div>

          <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none">
            Update Profile
          </button>
        </Fragment> */}
      </div>
    </Layout>
  );
};

export default ProfilePage;
