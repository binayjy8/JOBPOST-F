# Job Portal Backend

## Project Overview

This is the backend API for the **Job Portal Application**.
It provides REST APIs to manage job postings including creating, viewing, and deleting jobs. The backend is built using Node.js, Express, and MongoDB.

---

## Features

* Create a new job post
* Fetch all available jobs
* Fetch single job details by ID
* Delete a job post
* Duplicate job validation
* Input validation for job creation
* Error handling for invalid requests
* MongoDB database integration

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* Dotenv

---

## Installation Steps

### 1. Clone the repository

```bash
git clone <your-backend-repo-link>
```

### 2. Navigate to project folder

```bash
cd backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create `.env` file

Add:

```env
MONGODB=your_mongodb_connection_string
PORT=5000
```

### 5. Start server

```bash
npm run dev
```

or

```bash
node index.js
```

Server runs on:

```bash
http://localhost:5000
```

---

## Environment Variables

| Variable | Description               |
| -------- | ------------------------- |
| MONGODB  | MongoDB connection string |
| PORT     | Backend server port       |

---

## API Endpoints

### Get All Jobs

```http
GET /api/jobs
```

Response:

```json
[
  {
    "_id": "123",
    "title": "Frontend Developer",
    "company": "Google"
  }
]
```

---

### Get Single Job

```http
GET /api/jobs/:id
```

---

### Create Job

```http
POST /api/jobs
```

Request Body:

```json
{
  "title": "Frontend Developer",
  "company": "Google",
  "location": "Bangalore",
  "salary": 50000,
  "jobType": "Full-time",
  "description": "Job description",
  "qualifications": ["React", "JavaScript"]
}
```

---

### Delete Job

```http
DELETE /api/jobs/:id
```

---

## Screenshots

Add backend screenshots here:

* API testing screenshots
* MongoDB collection screenshots
* Server running screenshots

Example:

```md
![Server Running](./screenshots/Screenshot%202026-06-22%20095534.png)
```

---

## Live Working Link

Backend Live URL:

```text
https://jobpost-b.vercel.app
```

API Base URL:

```text
https://jobpost-b.vercel.app/api/jobs
```

---

## Author

Developed by Binay Bhusan Mohanta
