import React, { useEffect, useState } from "react";
import Layout from "../layout/main";
import ReactPlayer from "react-player";
import LoadingSpinner from "../components/LoadingSpinner";
import axiosInstance from "../global/api";
import { uploadVideo } from "../controllers/video_upload.controller";

const UploadVideoPage = () => {
  const [videoSrc, setVideoSrc] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  const [thumbnailSrc, setThumbnailSrc] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isUploading, setIsUploading] = useState(false); // Track upload state

  const handleFileChange = (key, e) => {
    const selectedFile = e.target.files[0];
    if (key === "video" && selectedFile && selectedFile.type === "video/mp4") {
      const fileURL = URL.createObjectURL(selectedFile);
      setVideoSrc(fileURL);
      setVideoFile(selectedFile);
    }

    if (key === "thumbnail") {
      const thumbnailURL = URL.createObjectURL(selectedFile);
      setThumbnailSrc(thumbnailURL);
      setThumbnailFile(selectedFile);
    }
  };

  const handleFormDataChange = (key, value) => {
    if (!key) return;

    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const resetForm = () => {
    setVideoFile(null);
    setThumbnailFile(null);
    setVideoSrc(null);
    setFormData({});
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description) {
      setErrors({
        title: !formData.title ? "Title is required" : "",
        description: !formData.description ? "Description is required" : "",
      });

      return;
    }

    let videoFilePath;
    let thumbnailFilePath;
    let thumbnail_public_id;
    let video_public_id;

    setIsUploading(true); // Set uploading state

    // Check if videoFile is selected and upload it
    if (videoFile) {
      try {
        let res = await uploadVideo(videoFile);
        videoFilePath = res.data.secure_url;
        video_public_id = res.data.public_id;
      } catch (error) {
        console.error("Error uploading video:", error);
        alert("Error uploading video.");
        setIsUploading(false);
        return;
      }
    }

    // Conditionally append thumbnail file if selected
    if (thumbnailFile) {
      try {
        let thumbnailFormData = new FormData();
        thumbnailFormData.append("thumbnail", thumbnailFile);

        const response = await axiosInstance.post(
          "/application/images-upload/",
          thumbnailFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        thumbnailFilePath = response.data.data.url;
        thumbnail_public_id = response.data.data.public_id;
      } catch (error) {
        console.error("Error uploading thumbnail image:", error);
        alert("Error uploading thumbnail image.");
        setIsUploading(false);
        return;
      }
    }

    const videoFormData = new FormData();

    videoFormData.append("title", formData.title);
    videoFormData.append("description", formData.description);
    videoFormData.append("video_url", videoFilePath);
    videoFormData.append("thumbnail_url", thumbnailFilePath);
    videoFormData.append("thumbnail_public_id", thumbnail_public_id);
    videoFormData.append("video_public_id", video_public_id);
    videoFormData.append("status", "live");

    setErrors({});

    // Optionally handle the creation of the video
    try {
      const response = await axiosInstance.post(
        "/application/videos/",
        videoFormData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        alert("Video created successfully");
        resetForm();
      } else {
        console.error("Video creation failed");
      }
    } catch (error) {
      console.error("Error creating video:", error);
      alert("Error creating video.");
    } finally {
      setIsUploading(false); // Reset upload state
    }
  };

  return (
    <Layout>
      <div className="py-10 px-5 md:px-0">
        <form onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-300 pb-12">
              <h2 className="text-lg font-semibold text-gray-800">
                Upload video
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Share your video with others by uploading it here. Ensure it
                meets the file size and format guidelines.
              </p>

              <div className="col-span-full mt-6">
                <label
                  htmlFor="file-upload"
                  className="block font-medium text-gray-700"
                >
                  Video file (MP4)
                </label>
                <div className="mt-3 flex justify-center rounded-lg border border-dashed border-gray-300 p-8">
                  <div className="text-center">
                    {videoSrc ? (
                      <div>
                        <ReactPlayer url={videoSrc} controls width="100%" />
                        <p className="text-xs text-green-500 mt-2">
                          Video file selected
                        </p>
                      </div>
                    ) : (
                      <div>
                        <div className="mt-2 flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 hover:text-indigo-500"
                          >
                            <span>Upload a video file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              onChange={(e) => handleFileChange("video", e)}
                              accept=".mp4"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">MP4 up to 10MB</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-300 pb-12">
              <h2 className="text-lg font-semibold text-gray-800">
                Video details
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Add details about your video, including a title and description.
                These will be displayed publicly.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6">
                <div className="">
                  <label
                    htmlFor="first-name"
                    className="block font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      className="p-3 w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={(e) =>
                        handleFormDataChange("title", e.target.value)
                      }
                      value={formData.title || ""}
                      disabled={isUploading}
                    />
                  </div>
                  {errors.title && (
                    <p className="text-sm text-red-600 italic">
                      {errors.title}
                    </p>
                  )}
                </div>

                <div className="">
                  <label
                    htmlFor="about"
                    className="block font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={4}
                      className="p-3 w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={(e) =>
                        handleFormDataChange("description", e.target.value)
                      }
                      value={formData.description || ""}
                      disabled={isUploading}
                    />
                  </div>
                  {errors.description && (
                    <p className="text-sm text-red-600 italic">
                      {errors.description}
                    </p>
                  )}
                  <p className="mt-2 text-sm text-gray-500">
                    Add a short description of your video content.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="thumbnail-upload"
                  className="block font-medium text-gray-700"
                >
                  Thumbnail image
                </label>
                <div className="mt-3 flex justify-center rounded-lg border border-dashed border-gray-300 p-8">
                  <div className="text-center">
                    {thumbnailSrc ? (
                      <div>
                        <img
                          src={thumbnailSrc}
                          alt="Thumbnail preview"
                          className="max-h-40 rounded-md"
                        />
                        <p className="text-xs text-green-500 mt-2">
                          Thumbnail selected
                        </p>
                      </div>
                    ) : (
                      <div>
                        <div className="mt-2 flex text-sm text-gray-600">
                          <label
                            htmlFor="thumbnail-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 hover:text-indigo-500"
                          >
                            <span>Upload a thumbnail</span>
                            <input
                              id="thumbnail-upload"
                              name="thumbnail-upload"
                              type="file"
                              className="sr-only"
                              onChange={(e) => handleFileChange("thumbnail", e)}
                              accept=".jpg,.jpeg,.png"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG up to 5MB
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className={`flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm ${
                    isUploading ? "cursor-not-allowed" : ""
                  }`}
                  disabled={isUploading}
                >
                  {isUploading ? (
                    <span className="flex items-center">
                      <LoadingSpinner className="h-5 w-5 mr-2" />
                      Uploading...
                    </span>
                  ) : (
                    "Upload video"
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default UploadVideoPage;
