// utils/uniqueSlug.js
const Video = require("../models/videos.model");

const generateSlug = (str) => {
  return str
    .toString() // Ensure it's a string
    .toLowerCase() // Convert to lowercase
    .trim() // Remove whitespace from both ends
    .replace(/[\s\W-]+/g, "-") // Replace spaces and non-word characters with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
};

const generateUniqueSlug = async (str_text) => {
  let slug = generateSlug(str_text);
  let uniqueSlug = slug;
  let counter = 1;

  while (await Video.exists({ slug: uniqueSlug })) {
    uniqueSlug = `${slug}-${counter}`;
    counter++;
  }

  return uniqueSlug;
};

module.exports = generateUniqueSlug;
