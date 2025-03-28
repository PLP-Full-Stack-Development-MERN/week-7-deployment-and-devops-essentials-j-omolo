# Personal Blog Platform - Frontend Documentation

## Project Overview
The Personal Blog Platform is a MERN stack application that allows users to create, edit, and publish blog posts. This frontend is built using React and connects to a backend API developed with Express.js and MongoDB.

## Installation
To set up the frontend application, follow these steps:

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/mern-blog-platform.git
   cd mern-blog-platform/frontend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Start the development server:**
   ```
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Component Descriptions
- **BlogEditor.js**: A component for creating and editing blog posts.
- **BlogList.js**: Displays a list of all blog posts.
- **BlogPost.js**: Shows the details of a single blog post.
- **HomePage.js**: The main page that includes the blog list.
- **AdminPage.js**: An admin panel for managing blog posts.

## CI/CD Pipeline Setup
The CI/CD pipeline is configured using GitHub Actions. It automatically runs tests on every push to the repository. Ensure that all tests pass before merging changes into the main branch.

## Monitoring and Security Measures
- **Error Tracking**: Sentry is integrated for tracking frontend errors.
- **Logging**: Use logging tools to monitor application performance and user interactions.
- **HTTPS**: Ensure that the application is served over HTTPS for secure communication.

For further details on the backend setup and API endpoints, refer to the backend's README.md file.