# Use an official Node runtime as a parent image
FROM node:16-alpine

# Set the working directory to /lastName_firstName_final_site
WORKDIR /lastName_firstName_final_site

# Copy the current directory contents into the container at /lastName_firstName_final_site
COPY . .

# Install any needed packages specified in package.json
RUN npm install

# Build the project for production
RUN npm run build

# Install serve to run the application
RUN npm install -g serve

# Make port 5575 available to the world outside this container
EXPOSE 5575

# Run serve when the container launches
CMD ["serve", "-s", "build", "-l", "5575"]
