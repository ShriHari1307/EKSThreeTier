
# Deploying 3-tier Application in Kubernetes

This project demonstrates how to deploy a complete 3-tier architecture application on AWS EKS. The application consists of three layers: frontend, backend, and database, each containerized using Docker and managed through Kubernetes for high availability and scalability.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Tools and Technologies](#tools-and-technologies)
- [Setup and Deployment](#setup-and-deployment)
  - [Prerequisites](#prerequisites)
  - [Steps](#steps)
- [Features](#features)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Overview

This project involves deploying a containerized 3-tier application using AWS EKS. Each tier—frontend, backend, and database—is deployed as a separate service. Kubernetes ensures seamless communication between tiers and simplifies application scaling and management in the cloud.

### Key Highlights:
- Containers built using Docker and Dockerfiles for each tier.
- Orchestration and deployment via AWS EKS.
- Integration with AWS RDS for database services.

## Architecture

The architecture includes:

1. **Frontend**: The user interface layer, developed with modern web technologies and connected to the backend API.
2. **Backend**: A Spring Boot application handling business logic and API endpoints.
3. **Database**: A relational database hosted on AWS RDS, accessible by the backend for data storage and retrieval.

## Tools and Technologies

- **Docker**: For containerizing the application.
- **AWS EKS**: To manage Kubernetes clusters.
- **Kubernetes**: For orchestration and scaling of containers.
- **AWS EC2**: For hosting the Kubernetes worker nodes.
- **Git**: For version control.
- **Maven**: For building the backend Spring Boot application.
- **AWS RDS**: For database management.
- **Spring Boot**: For backend development.
- **VSCode**: As the code editor.

## Setup and Deployment

### Prerequisites

Before you begin, ensure you have the following:

- AWS CLI installed and configured with appropriate permissions.
- kubectl installed and configured to connect to your AWS EKS cluster.
- Docker installed on your local machine.
- Access to an AWS account with EKS and RDS services.

### Steps

1. **Build Docker Images**:
   - Navigate to each tier’s directory (frontend and backend).
   - Build Docker images using the provided Dockerfiles:
     ```bash
     docker build -t <image-name> .
     ```

2. **Push Images to Docker Hub/ECR**:
   - Tag the images and push them to your container registry (e.g., Docker Hub or AWS ECR):
     ```bash
     docker tag <image-name> <repository-url>/<image-name>
     docker push <repository-url>/<image-name>
     ```

3. **Create Kubernetes Manifests**:
   - Define Kubernetes Deployment and Service YAML files for each tier.
   - Apply the manifests to your EKS cluster:
     ```bash
     kubectl apply -f <manifest-file>
     ```

4. **Set Up AWS RDS**:
   - Create an RDS instance for the database tier.
   - Configure security groups and networking to allow access from the backend.

5. **Test the Application**:
   - Access the frontend service via the LoadBalancer endpoint.
   - Verify that the application tiers communicate correctly.

## Features

- High availability through Kubernetes orchestration.
- Scalability of individual tiers as needed.
- Secure and managed database services using AWS RDS.

## Future Enhancements

- Implement CI/CD pipeline for automated deployment.
- Add monitoring and logging using Prometheus and Grafana.
- Enhance security with IAM roles and policies.
