# Use the official Node.js image to build the app
FROM node:16 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Serve the built app using NGINX
FROM nginx:latest

# Copy the build output from the previous stage to NGINX's web directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom NGINX configuration if needed (optional)
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
