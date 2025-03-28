# Backend README.md

# Personal Blog Platform - Backend

## Overview

This is the backend for the Personal Blog Platform, built using Express.js and MongoDB. It provides RESTful API endpoints for managing blog posts, including creating, editing, and deleting posts. The backend is designed to be deployed on Render and is configured for production use with PM2.

## Project Setup

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)
- PM2 (for process management)

### Installation

1. Clone the repository:

   git clone https://github.com/yourusername/mern-blog-platform.git

2. Navigate to the backend directory:

   cd mern-blog-platform/backend

3. Install dependencies:

   npm install

4. Create a `.env` file in the backend directory and add your environment variables:

   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=your_preferred_port
   ```

### Running the Application

To start the application in development mode, run:

npm run dev

To start the application in production mode using PM2, run:

pm2 start pm2.config.js

## API Endpoints

### Blog Posts

- **GET /api/blogs**: Retrieve all blog posts.
- **GET /api/blogs/:id**: Retrieve a single blog post by ID.
- **POST /api/blogs**: Create a new blog post.
- **PUT /api/blogs/:id**: Update an existing blog post by ID.
- **DELETE /api/blogs/:id**: Delete a blog post by ID.

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration. The CI pipeline is defined in the `.github/workflows/ci.yml` file. It runs automated tests on every push to the repository.

## Monitoring and Logging

- The application uses Winston for logging HTTP requests and errors.
- Monitor server logs using Render's dashboard.

## Security Measures

- Ensure HTTPS is enabled for secure communication.
- Store sensitive credentials in the `.env` file.
- Implement basic authentication for accessing the admin panel.

## License

This project is licensed under the MIT License. See the LICENSE file for details.