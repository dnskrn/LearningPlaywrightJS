# Docker Interview Questions and Solutions

## What is Docker?  
Docker is an open-source platform designed to automate the deployment of applications inside lightweight, portable containers. Containers package an application and its dependencies together, ensuring consistency across different environments.

---

## Explain the Difference Between a Container and a Virtual Machine.  
- **Container**: Lightweight, shares the host OS kernel, and is faster to start. Containers are isolated but run on the same OS.  
- **Virtual Machine (VM)**: Heavyweight, includes a full OS, and requires a hypervisor. VMs are more resource-intensive and slower to start.

---

## How Does Docker Work?  
Docker uses a client-server architecture. The Docker client communicates with the Docker daemon, which builds, runs, and manages containers. Docker uses containerization technology to isolate applications and their dependencies.

---

## What is a Docker Image?  
A Docker image is a lightweight, standalone, and executable package that includes everything needed to run a piece of software, such as code, runtime, libraries, and dependencies. Images are used to create containers.

---

## Explain the Purpose of a Dockerfile.  
A Dockerfile is a text file containing instructions to build a Docker image. It automates the process of creating images by specifying the base image, dependencies, commands, and configurations.

---

## How Do You Link Containers in Docker?  
Containers can be linked using Docker networks. By creating a custom network, containers can communicate with each other using container names as hostnames. For example:  
```bash
docker network create my_network
docker run --network my_network --name container1 my_image
docker run --network my_network --name container2 my_image
```

---

## What is Docker Compose?  
Docker Compose is a tool for defining and running multi-container Docker applications. It uses a `docker-compose.yml` file to configure application services and allows you to start all services with a single command:  
```bash
docker-compose up
```

---

## Explain the Difference Between Docker Restart Policies: "Always," "Unless-Stopped," and "On-Failure."  
- **Always**: Restarts the container regardless of the exit status.  
- **Unless-Stopped**: Restarts the container unless it was explicitly stopped by the user.  
- **On-Failure**: Restarts the container only if it exits with a non-zero status.

---

## How Can You Share Data Between a Docker Container and the Host System?  
You can share data using volumes or bind mounts. For example:  
```bash
docker run -v /host/path:/container/path my_image
```

---

## What is the Purpose of the HEALTHCHECK Instruction in a Dockerfile?  
The `HEALTHCHECK` instruction defines a command to test the health of a container. It helps Docker determine if the container is functioning correctly. Example:  
```dockerfile
HEALTHCHECK --interval=30s CMD curl -f http://localhost/ || exit 1
```
