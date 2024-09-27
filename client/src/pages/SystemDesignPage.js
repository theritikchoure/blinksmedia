import React from "react";
import Layout from "../layout/main";

const SystemDesignPage = () => {
  return (
    <Layout>
      <div class="container mx-auto p-6">
        <h1 class="text-4xl font-bold mb-6 text-center">System Design</h1>

        <p class="mb-4">
          The architecture simulates asynchronous video processing, offloading
          tasks to provide immediate user feedback while processing occurs in
          the background.
        </p>

        <p class="mb-6">
          The video upload service uploads the file to cloud storage and creates
          a processing task in the database. The task queue (RabbitMQ) handles
          asynchronous video processing by queuing tasks. The Node.js worker
          processes the tasks using FFmpeg for video conversion and streaming.
          The UI displays real-time processing status to the user.
        </p>

        <div class="mx-auto p-6 bg-indigo-200 rounded-lg shadow-sm text-black">
          <p class="text-lg mb-2">
            This project represents my approach to building and visualizing a
            scalable video processing system.
          </p>
          <p class="text-lg">
            My motivation was to implement various concepts from the domain of
            system design, including asynchronous processing, containerization
            with Docker, and effective observability to enhance user experience
            and system performance.
          </p>
        </div>

        <h2 class="text-3xl font-semibold mt-8 mb-4">Architecture Details</h2>
        <div class="flex justify-center mb-6">
          <img
            class="w-full md:w-3/4 shadow-2xl"
            src="https://github.com/theritikchoure/blinksmedia/raw/main/docs/architecture.png"
            alt="Architecture Diagram"
          />
        </div>

        <p class="mb-4">
          Technologies used include <strong>Cloudinary Storage</strong> for
          video storage, <strong>RabbitMQ</strong> for task queuing,{" "}
          <strong>Node.js </strong> and <strong>FFmpeg</strong> for backend
          processing, <strong>MongoDB</strong> for database,{" "}
          <strong>Redis</strong> for caching, and <strong>Sharp</strong> for
          image processing. The frontend uses <strong>React.js</strong>, and all
          services are containerized using <strong>Docker</strong>.
        </p>

        <h2 class="text-2xl font-semibold mt-6 mb-2">1. Video Upload</h2>
        <ul class="list-disc list-inside mb-4">
          <li>
            When a user uploads a video, the file is first uploaded to a cloud
            storage service. In this project, we are using{" "}
            <strong>Cloudinary Storage</strong> to store the uploaded videos,
            but any cloud storage service can be integrated.
          </li>
          <li>
            Once the upload is complete, a processing task is created in the
            database. This task contains all the necessary information for
            processing, such as the video URL, status, and any specific
            processing instructions.
          </li>
        </ul>

        <h2 class="text-2xl font-semibold mt-6 mb-2">
          2. Image Processing with Sharp
        </h2>
        <ul class="list-disc list-inside mb-4">
          <li>
            If a user uploads an image in any format, the image is processed
            using the <strong>Sharp</strong> library before uploading to
            Cloudinary.
          </li>
          <li>
            The Sharp library converts the uploaded image to the WebP format,
            which provides better optimization and reduces file size while
            maintaining quality.
          </li>
          <li>
            After conversion, the optimized image is then uploaded to Cloudinary
            along with any associated processing tasks.
          </li>
        </ul>

        <h2 class="text-2xl font-semibold mt-6 mb-2">
          3. Task Queue with RabbitMQ
        </h2>
        <ul class="list-disc list-inside mb-4">
          <li>
            After the processing task is created, its ID is sent to a{" "}
            <strong>RabbitMQ</strong> queue. This queue acts as a message
            broker, decoupling the task creation from the processing and
            allowing for asynchronous handling of the workload.
          </li>
          <li>
            The user interface is updated with a message indicating that the
            video is being processed and that it may take a few minutes.
          </li>
        </ul>

        <h2 class="text-2xl font-semibold mt-6 mb-2">4. Node.js Worker</h2>
        <ul class="list-disc list-inside mb-4">
          <li>
            A Node.js worker is set up to continuously poll the RabbitMQ queue
            for new tasks. The worker acts as a dedicated processor, picking up
            tasks as they become available.
          </li>
          <li>
            Upon receiving a task, the worker retrieves the necessary
            information from the database and begins processing the video using
            FFmpeg. FFmpeg is a powerful tool used for video conversion,
            normalization, and creating adaptive bitrate streaming formats.
          </li>
          <li>
            Once the processing is complete, the resulting files are stored back
            in the cloud storage.
          </li>
        </ul>

        <h2 class="text-2xl font-semibold mt-6 mb-2">5. Task Completion</h2>
        <ul class="list-disc list-inside mb-4">
          <li>
            After the video processing is finished, the task's status is updated
            in the database. This status update triggers the user interface to
            reflect the completion of the processing, notifying the user that
            the video is now available for viewing or further actions.
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default SystemDesignPage;
