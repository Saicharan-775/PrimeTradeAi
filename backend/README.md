PrimeTradeAI Backend – Internship Assignment
📌 Overview

PrimeTradeAI Backend is a scalable REST API built using Node.js, Express, and MongoDB.
It implements secure authentication, role-based access control, and CRUD APIs for task management.

This project was developed as part of the Backend Developer Intern Assignment, with a focus on API design, security, and scalability.

🛠 Tech Stack

Node.js

Express.js

MongoDB & Mongoose

JWT Authentication

bcrypt (Password Hashing)

Railway (Deployment)

Postman (API Documentation)

🚀 Features

User Registration & Login

Secure password hashing using bcrypt

JWT-based authentication

Role-based access control (User / Admin)

CRUD APIs for Tasks

API versioning (/api/v1)

Centralized error handling & validation

Production-ready project structure

Deployed backend on Railway

📂 Project Structure
backend/
│── controllers/
│── routes/
│── models/
│── middleware/
│── config/
│── app.js
│── server.js
│── .env

⚙️ Setup (Local)
git clone <repository-url>
cd backend
npm install
npm run dev

🔐 Environment Variables

Create a .env file in the backend root:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

📡 API Endpoints
Auth

POST /api/v1/auth/register

POST /api/v1/auth/login

Tasks (Protected – JWT Required)

GET /api/v1/tasks

POST /api/v1/tasks

PUT /api/v1/tasks/:id

DELETE /api/v1/tasks/:id

Admin (Protected – Admin Role)

GET /api/v1/admin/users

🧪 API Documentation

Postman collection is included in the repository:

PrimeTradeAI_Backend_API.postman_collection.json


Import this file into Postman to test all endpoints.

🌐 Deployment

Backend deployed on Railway:

https://primetradeai-production-8072.up.railway.app

📈 Scalability Notes

Modular MVC-based structure

Easily extendable for microservices

JWT-based stateless authentication

Can be enhanced with Redis caching, Docker, and logging tools

✅ Assignment Completion Status

✔ Authentication & JWT

✔ Role-based access

✔ CRUD APIs

✔ Database schema

✔ Frontend integration

✔ Deployment & documentation