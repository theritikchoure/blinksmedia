const { exec } = require("child_process");
const ffmpeg = require("fluent-ffmpeg");
const path = require("path");

const transcodeVideo = (inputFile, outputFormat) => {
  return new Promise((resolve, reject) => {
    const outputFilePath = path.join(
      __dirname,
      "output",
      `${path.basename(inputFile, path.extname(inputFile))}.${outputFormat}`
    );

    ffmpeg(inputFile)
      .output(outputFilePath)
      .on("end", () => resolve(outputFilePath))
      .on("error", (err) => reject(err))
      .run();
  });
};

module.exports = {
  transcodeVideo,
};
