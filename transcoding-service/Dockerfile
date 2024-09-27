# Use an official Node.js runtime (Alpine version)
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Install necessary dependencies for Alpine
RUN apk add --no-cache bash

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app runs on
EXPOSE 5001

# Command to run the application
CMD ["node", "worker.js"]
