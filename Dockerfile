# Use the official image as a parent image.
FROM node:12.13.1-alpine

# Set the working directory.
WORKDIR /app

# Copy the file from your host to your current location.
COPY package.json \
    yarn.lock \
    index.js \
    app.js \
    cors.js \
    ./

# Run the command inside your image filesystem.
# RUN apk add --no-cache ca-certificates
RUN yarn install

# Add metadata to the image to describe which port the container is listening on at runtime.
EXPOSE 8080
EXPOSE 7676

# Run the specified command within the container.
CMD [ "yarn", "start" ]
