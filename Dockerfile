# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Creating a working directory inside container
WORKDIR /insideContainer/app

# Add the source code to that created working directory
COPY ./ /insideContainer/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output which is present inside node container to replace the default nginx contents.
COPY --from=build /insideContainer/app/dist/EMS-client /usr/share/nginx/html

# Expose port 80
EXPOSE 80