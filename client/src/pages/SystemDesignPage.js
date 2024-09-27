import React from "react";
import Layout from "../layout/main2";

const SystemDesignPage = () => {
  return (
    <Layout>
      <h1 id="blinksmedia---asynchronous-video-processing-architecture-with-rabbitmq">
        BlinksMedia - Asynchronous Video Processing Architecture with RabbitMQ
      </h1>
      <p>
        <a href="https://vercel.com/your-vercel-project-link">
          <img
            src="https://img.shields.io/badge/deploy-vercel-000000?style=for-the-badge&amp;logo=vercel"
            alt="Vercel Deploy Status"
          />
        </a>{" "}
        <a href="https://raleway.com/your-raleway-project-link">
          <img
            src="https://img.shields.io/badge/deploy-raleway-000000?style=for-the-badge&amp;logo=raleway"
            alt="Raleway Deploy Status"
          />
        </a>
      </p>
      <p>
        <strong>BlinksMedia</strong> is a sophisticated short-form video
        application designed to showcase quick, engaging content. This project
        demonstrates my expertise in modern web development technologies,
        including React.js for the frontend and Node.js/Express for the backend.
      </p>
      <figure>
        <img
          src="https://github.com/theritikchoure/blinksmedia/raw/main/docs/home_landing_page.png"
          alt="Blinks"
        />
        <figcaption aria-hidden="true">Blinks</figcaption>
      </figure>
      <h2 id="project-overview">Project Overview</h2>
      <p>
        In this project, I’ve implemented an asynchronous video processing
        architecture to efficiently handle video uploads and processing tasks.
        The architecture is designed to offload the heavy lifting of video
        processing from the main application thread, ensuring that users do not
        have to wait synchronously for the process to complete. This approach
        enhances the user experience by providing immediate feedback while the
        processing happens in the background.
      </p>
      <h2 id="architecture-details">Architecture Details</h2>
      <figure>
        <img
          src="https://github.com/theritikchoure/blinksmedia/raw/main/docs/architecture.drawio.png"
          alt="Blinks Architecture Details"
        />
        <figcaption aria-hidden="true">Blinks Architecture Details</figcaption>
      </figure>
      <h3 id="video-upload">1. Video Upload</h3>
      <ul>
        <li>
          <p>
            When a user uploads a video, the file is first uploaded to a cloud
            storage service. In this project, we are using
            <code>Cloudinary Storage</code> to store the uploaded videos, but
            any cloud storage service can be integrated.
          </p>
        </li>
        <li>
          <p>
            Once the upload is complete, a processing task is created in the
            database. This task contains all the necessary information for
            processing, such as the video URL, status, and any specific
            processing instructions.
          </p>
        </li>
      </ul>
      <h3 id="task-queue-with-rabbitmq">2. Task Queue with RabbitMQ</h3>
      <ul>
        <li>
          After the processing task is created, its ID is sent to a
          <code>RabbitMQ</code> queue. This queue acts as a message broker,
          decoupling the task creation from the processing and allowing for
          asynchronous handling of the workload.
        </li>
        <li>
          The user interface is updated with a message indicating that the video
          is being processed and that it may take a few minutes.
        </li>
      </ul>
      <h3 id="node.js-worker">3. Node.js Worker</h3>
      <ul>
        <li>
          A Node.js worker is set up to continuously poll the RabbitMQ queue for
          new tasks. The worker acts as a dedicated processor, picking up tasks
          as they become available.
        </li>
        <li>
          Upon receiving a task, the worker retrieves the necessary information
          from the database and begins processing the video using FFmpeg. FFmpeg
          is a powerful tool used for video conversion, normalization, and
          creating adaptive bitrate streaming formats.
        </li>
        <li>
          Once the processing is complete, the resulting files are stored back
          in the cloud storage.
        </li>
      </ul>
      <h3 id="task-completion">4. Task Completion</h3>
      <ul>
        <li>
          After the video processing is finished, the task’s status is updated
          in the database. This status update triggers the user interface to
          reflect the completion of the processing, notifying the user that the
          video is now available for viewing or further actions.
        </li>
      </ul>
      <h3 id="benefits-of-this-architecture">Benefits of this Architecture</h3>
      <ul>
        <li>
          <strong>Asynchronous Processing:</strong> Users are not required to
          wait synchronously for video processing, enhancing the overall user
          experience.
        </li>
        <li>
          <strong>Scalability:</strong> The use of RabbitMQ and a dedicated
          worker allows the system to handle multiple video processing tasks
          concurrently, making it highly scalable.
        </li>
        <li>
          <strong>Decoupling:</strong> The task queue decouples the upload
          process from the processing logic, resulting in a more modular and
          maintainable codebase.
        </li>
        <li>
          <strong>Robustness:</strong> By leveraging cloud storage and FFmpeg,
          the architecture ensures that video processing is both reliable and
          capable of handling various video formats and requirements.
        </li>
      </ul>
      <h2 id="technology-stack">Technology Stack</h2>
      <p align="center">
        <img
          src="https://github.com/theritikchoure/blinksmedia/raw/main/docs/OIP.jpeg"
          alt="Tech Logo 1"
          height="50"
        />
        <img
          src="https://github.com/theritikchoure/blinksmedia/raw/main/docs/RabbitMQ.svg"
          alt="RabbitMQ"
          height="50"
        />
        <img
          src="https://github.com/theritikchoure/blinksmedia/raw/main/docs/Node.js.svg"
          alt="Node.js"
          height="50"
        />
        <img
          src="https://github.com/theritikchoure/blinksmedia/raw/main/docs/MongoDB.svg"
          alt="MongoDB"
          height="50"
        />
        <img
          src="https://github.com/theritikchoure/blinksmedia/raw/main/docs/React.svg"
          alt="React"
          height="50"
        />
        <img
          src="https://github.com/theritikchoure/blinksmedia/raw/main/docs/Cloudinary.svg"
          alt="Cloudinary"
          height="50"
        />
      </p>
      <ul>
        <li>
          <strong>Google Cloud Storage:</strong> For storing uploaded and
          processed video files.
        </li>
        <li>
          <strong>RabbitMQ:</strong> For managing the task queue and ensuring
          asynchronous processing.
        </li>
        <li>
          <strong>Node.js:</strong> As the backend runtime environment,
          including the worker process.
        </li>
        <li>
          <strong>FFmpeg:</strong> For video processing tasks such as
          normalization and adaptive bitrate streaming. <br /> <br />
        </li>
        <li>
          <strong>MongoDB</strong>: Using MongoDB for a flexible and scalable
          database solution.
        </li>
        <li>
          <strong>Redis</strong>: Implementing Redis for efficient caching and
          real-time data processing.
        </li>
        <li>
          <strong>React.js</strong>: Leveraging React’s component-based
          architecture for a responsive and interactive user interface.
        </li>
      </ul>
      <h2 id="getting-started">Getting Started</h2>
      <h3 id="prerequisites">Prerequisites</h3>
      <ul>
        <li>Node.js and npm installed on your machine.</li>
        <li>Git installed on your machine.</li>
      </ul>
      <h3 id="clone-the-repository">Clone the Repository</h3>
      <div class="sourceCode" id="cb1">
        <pre class="sourceCode bash">
          <code class="sourceCode bash">
            <span id="cb1-1">
              <a href="#cb1-1" aria-hidden="true" tabindex="-1"></a>
              <span class="fu">git</span> clone
              https://github.com/theritikchoure/blinksmedia.git
            </span>
            <span id="cb1-2">
              <a href="#cb1-2" aria-hidden="true" tabindex="-1"></a>
              <span class="bu">cd</span> blinksmedia
            </span>
          </code>
        </pre>
      </div>
      <h3 id="setup-and-installation">Setup and Installation</h3>
      <h4 id="client-react.js">Client (React.js)</h4>
      <pre>
        <code>cd client npm install npm start</code>
      </pre>
      <h4 id="server-node.jsexpress">Server (Node.js/Express)</h4>
      <pre>
        <code>cd server npm install npm start</code>
      </pre>
      <h3 id="configuration">Configuration</h3>
      <ul>
        <li>
          <strong>Environment Variables:</strong> Configure necessary
          environment variables for both the frontend and backend.
        </li>
        <li>
          <strong>Database:</strong> Set up MongoDB and Redis instances as per
          the configuration files.
        </li>
      </ul>
      <h2 id="contact">Contact</h2>
      <p>
        Feel free to reach out to me for collaboration or job opportunities:
      </p>
      <p>
        LinkedIn:{" "}
        <a href="https://linkedin.com/in/ritikchourasiya">
          <span class="citation" data-cites="ritikchourasiya">
            @ritikchourasiya
          </span>
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a href="https://github.com/theritikchoure">
          <span class="citation" data-cites="theritikchoure">
            @theritikchoure
          </span>
        </a>
      </p>
      <p>
        Email:{" "}
        <a href="mailto://ritvikchoure65@gmail.com">ritvikchoure65@gmail.com</a>
      </p>
    </Layout>
  );
};

export default SystemDesignPage;
