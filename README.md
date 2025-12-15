PrimeTradeAI – Full Stack Internship Assignment

A scalable backend system with authentication, role-based access control, and CRUD APIs, supported by a minimal frontend UI for demonstration and testing.

## Project Overview

PrimeTradeAI is a full-stack application built as part of a Backend Developer Internship assignment.
The primary focus is on designing secure, scalable REST APIs, while a lightweight React frontend is provided to demonstrate API functionality.

The system includes:

User authentication with JWT

Role-based access control (User / Admin)

CRUD operations on a secondary entity (Tasks)

API versioning and structured project layout

Deployed backend & frontend

## Architecture
PrimeTradeAI/
│
├── backend/        # Node.js + Express REST API
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── middleware
│   ├── config
│   └── server.js
│
├── frontend/       # React (Vite) demo UI
│   ├── src
│   └── vite.config.js
│
└── postman/        # API documentation (Postman collection)

 ##Tech Stack
Backend (Primary Focus)

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

bcrypt (password hashing)

Railway (Deployment)

Frontend (Supportive)

React.js (Vite)

Axios

Redux Toolkit

Tailwind CSS

Vercel (Deployment)

## Core Features
Authentication & Security

User registration & login

Password hashing using bcrypt

JWT-based authentication

Protected routes using middleware

Role-Based Access Control

User role: access own tasks

Admin role: access admin-only APIs

Task Management (CRUD)

Create tasks

Read user-specific tasks

Update tasks

Delete tasks

API Design

RESTful endpoints

API versioning (/api/v1)

Centralized error handling

Input validation & sanitization

## Environment Variables
Backend (backend/.env)
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Frontend (frontend/.env)
VITE_API_URL=https://primetradeai-production-8072.up.railway.app


## Environment variables are not committed to GitHub for security reasons.

 Running Locally
Backend
cd backend
npm install
npm run dev

Frontend
cd frontend
npm install
npm run dev

🔗 Deployed URLs

Backend (Railway)
 https://primetradeai-production-8072.up.railway.app

Frontend (Vercel)
 https://primetrade-ai.vercel.app
 

## API Documentation

API documentation is provided via Postman Collection.

Included Requests

Register user

Login user

Get tasks (protected)

Create task (protected)

Update task (protected)

Delete task (protected)

## The Postman collection JSON is included in the repository for easy import.

## Scalability & Future Improvements

Modular architecture for adding new modules

Can be extended to microservices

Redis caching for frequent reads (optional)

Dockerization for containerized deployment

Rate limiting & logging (Winston / Morgan)

📄 Assignment Alignment Checklist

✅ Secure REST API with JWT authentication
✅ Role-based access control
✅ CRUD APIs for secondary entity
✅ API versioning & clean structure
✅ Frontend integration
✅ Deployment-ready project
✅ API documentation
✅ Scalable architecture

👤 Author
Nagilla Saicharan
