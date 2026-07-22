# RenewCred CMS

A production-ready Content Management System (CMS) built using Next.js, Express.js, MongoDB, and Redux Toolkit.

The project consists of three applications:

- Admin Panel (CMS)
- Backend API
- Public Website

The public website retrieves all content dynamically from the backend instead of using hardcoded data.

---
## 🔐 Admin Login

Use the following credentials to access the Admin CMS:

**Admin URL:**  
```
renew-cred-cms-seven.vercel.app/
```

**Email:**
```text
test@gmail.com
```

**Password:**
```text
123456
```

# Features

## Authentication

- Admin Login
- Admin Logout
- JWT Authentication
- Protected Routes

## Content Management

- Create Pages
- View Pages
- Edit Pages
- Delete Pages

## Public Website

- Dynamic content fetched through REST APIs
- No hardcoded page content

## State Management

- Redux Toolkit
- Authentication state
- Page state

---

# Technology Stack

## Frontend

- Next.js
- React
- Redux Toolkit
- Tailwind CSS
- Axios

## Backend

- Express.js
- Node.js
- JWT
- bcrypt
- Mongoose

## Database

- MongoDB

---

# Project Structure

```
renewcred-cms
│
├── admin
├── backend
├── website
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
cd renewcred-cms
```

---

## Backend

```bash
cd backend
npm install
npm run dev
```

## Admin

```bash
cd admin
npm install
npm run dev
```

Runs on

```
http://localhost:3000
```

---

## Website

```bash
cd website
npm install
npm run dev
```

Runs on

```
https://renew-cred-cms-seven.vercel.app/
```

(Change the port if required.)

---

# Environment Variables

Create a `.env` file inside the backend folder.

Example variables are provided in `.env.example`.

---

# Authentication

JWT is used for administrator authentication.

After successful login:

- JWT token is generated
- Token is stored in localStorage
- Redux Toolkit manages authentication state
- Protected APIs require Authorization Bearer Token

---

# API Endpoints

## Authentication

POST `/api/admin/login`

GET `/api/admin/profile`

---

## Pages

GET `/api/pages`

GET `/api/pages/:slug`

POST `/api/pages`

PUT `/api/pages/:id`

DELETE `/api/pages/:id`

---

# Architecture Overview

The application follows a three-tier architecture.

```
Frontend

    ↓

Backend REST API

    ↓

MongoDB Database
```

The Admin Panel communicates with the backend using REST APIs.

The Public Website also consumes the same APIs, ensuring that all displayed content is dynamically managed through the CMS.

---

# Assumptions

- Only administrators can access the CMS.
- JWT tokens are used for authentication.
- MongoDB is available locally.
- Public website content is managed through the admin panel.

---

# Future Improvements

- Rich Text Editor
- Image Upload
- Role-based Access Control
- Content Versioning
- Draft & Publish Workflow
- Docker Deployment
- Unit and Integration Tests

## Docker

To run the complete application using Docker:

```bash
docker compose up --build
```

This starts:
- Admin Panel: http://localhost:3000
- Public Website: http://localhost:3001

# Conclusion

This CMS provides a robust, scalable, and secure solution for managing dynamic content across multiple platforms. With a clear separation of concerns, comprehensive API endpoints, and a modern tech stack, it's ready for production use with minimal modifications.
