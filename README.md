# Connect Database

## Reflections

**1. Why whitelist IP addresses?**

When you allow connections from anywhere (0.0.0.0/0), any computer on the internet can try to access your database. Hackers can attempt to break in by guessing passwords or exploiting vulnerabilities. In production, you whitelist specific IP addresses - like your server's IP - so only trusted computers can even attempt to connect. It's like giving your house key to everyone versus just your family.

**2. What is dotenv for?**

The dotenv package loads environment variables from a .env file into your code. This keeps sensitive information like passwords and connection strings out of your code files, so you don't accidentally share them on GitHub. In production, you use the platform's built-in environment variable system instead - like setting environment variables directly in Heroku, AWS, or Azure.

**3. How to debug connection failures?**

First, I check if my .env file exists and has the correct connection string. Then I verify my MongoDB Atlas username and password are correct. I confirm my IP address is whitelisted in MongoDB Atlas or that 0.0.0.0/0 is allowed. I also check if my network or firewall is blocking the connection. Finally, I look at the error message in the console for specific clues about what's wrong.

## Description

A simple Node.js/Express application that connects to a MongoDB Atlas database. This project demonstrates basic backend infrastructure setup including environment variable management, database connection handling, and RESTful API endpoints. Built as part of learning backend development fundamentals.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [About the Author](#about-the-author)

## Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express** - Web application framework
- **MongoDB** - NoSQL database
- **MongoDB Atlas** - Cloud database service
- **dotenv** - Environment variable management

## Features

**Database Connection** - Successfully connects to MongoDB Atlas cluster  
**Environment Variables** - Secure credential management using .env file  
**RESTful Endpoint** - GET route that confirms database connectivity  
**Error Handling** - Graceful failure responses with appropriate status codes  
**Production-Ready Setup** - M0 tier Atlas cluster configuration

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to project directory:
   ```bash
   cd connect-database
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGO_URI="your_connection_string_here"
   ```

5. Start the server:
   ```bash
   node server.js
   ```

6. Test the connection by visiting:
   ```
   http://localhost:3001/
   ```

## Usage

Once the server is running, navigate to `http://localhost:3001/` in your browser. You should see:

```json
{
  "message": "Successfully connected to the database!"
}
```

If the connection fails, you'll receive:

```json
{
  "message": "Failed to connect to the database."
}
```

## About the Author

**Clarence Franklin**

Backend developer learning to build production-ready applications with Node.js, Express, and MongoDB.
