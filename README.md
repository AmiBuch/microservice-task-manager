# Microservices Task Manager

This project is a microservices-based task management system, demonstrating various concepts of microservices architecture.

## Services

- API Gateway
- User Service
- Task Service
- Notification Service
- Analytics Service
- ML Service

## Technologies Used

- Node.js
- Express
- NestJS
- Docker
- Kubernetes (planned)


## Getting Started
Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Ensure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/) (for any local development without Docker)

### Installation

1. **Clone the repository**:

```bash
   git clone https://github.com/amibuch/microservice-task-manager.git
   cd microservice-task-manager
```

2. **Environment Configuration**
    Create an `.env` file in the root directory and add the necessary environment variables for each service  
    Here, it will be  
```bash
    # API Gateway
    API_GATEWAY_PORT=3000
```

3. **Build Docker image**
```bash
    docker-compose build
```

### Running the Application
1. **Start all Services:**
```bash
    docker-compose up
    # launches all services listed in docker-compose.yml
```

2. **Access Services**
    - API Gateway : `http://localhost:3000`

3. **Shut down the services**
```bash
    docker-compose down
```
### Development
- To develop and test individual services locallly without Docker, navigate to the service directory and run:
```bash
npm install
npm start
```
- Make sure to set the appropriate env variables for each service
