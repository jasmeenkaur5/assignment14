# Portfolio Website

## Overview
This portfolio website showcases my coursework and projects. It is built using React and hosted within a Docker container.

## Running the Application
To run this application, you will need Docker installed on your machine. Follow these steps to get the application running on localhost at port 5575.

### Build the Docker Image
First, build the Docker image using the following command:
```bash
docker build -t kaur_jasmeen_coding_assignment14 .

Once the image has been built, you can run it with:

docker run --name kaur_jasmeen_coding_assignment14 -p 5575:5575 -d kaur_jasmeen_coding_assignment14
