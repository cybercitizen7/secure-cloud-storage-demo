# Use minimal docker image based on Alpine Linux (only 5MB)
FROM nginx:alpine

# Copy our local nginx configuration file to Docker Image
COPY nginx.conf /etc/nginx/nginx.conf

# Sets the working directory for RUN, CMD, COPY etc instructions that follow next
WORKDIR /usr/share/nginx/html

# Copy local dist files to work directory
COPY dist/ .