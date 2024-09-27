import axiosInstance from "../global/api";

export async function uploadVideo(videoFile) {
  try {

    const formData = new FormData();
    formData.append("video", videoFile); // Send the actual video file

    // Make a dazzling request to your backend to handle the upload
    const response = await axiosInstance.post(
      "/application/videos-upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Critical to handle file uploads
        },
      }
    );

    console.log("Video upload response:", response.data);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
