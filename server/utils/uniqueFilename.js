const crypto = require('crypto');

/**
 * Generates a unique file name.
 * @param {string} originalName - The original file name.
 * @returns {string} - A unique file name.
 */
function generateUniqueFileName(originalName) {
    const extension = originalName.split('.').pop(); // Extract file extension
    const timestamp = Date.now(); // Current timestamp
    const randomString = crypto.randomBytes(8).toString('hex'); // Random string for uniqueness
    
    return `${timestamp}-${randomString}.${extension}`;
}

/**
 * Generates a unique folder name from a file name.
 * @param {string} originalName - The original file name.
 * @returns {string} - A unique folder name.
 */
function generateFolderNameFromFileName(originalName) {
    const baseName = originalName.split('.').slice(0, -1).join('.'); // Extract base name without extension
    const timestamp = Date.now(); // Current timestamp
    const randomString = crypto.randomBytes(8).toString('hex'); // Random string for uniqueness
    
    return `${baseName}-${timestamp}-${randomString}`;
}
module.exports = {generateUniqueFileName, generateFolderNameFromFileName};
