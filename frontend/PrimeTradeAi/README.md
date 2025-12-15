PrimeTradeAI Frontend
Overview

PrimeTradeAI Frontend is a minimal React application built to demonstrate and interact with the PrimeTradeAI backend APIs.
It provides authentication, protected routes, and task management functionality using JWT-based authorization.

This frontend serves as a supportive UI for validating backend APIs as part of the internship assignment.

Tech Stack

React.js (Vite)

Redux Toolkit

React Router

Axios

Tailwind CSS

Features

User registration & login

JWT-based protected dashboard

Role-aware access (User/Admin)

CRUD operations for tasks

Error & success message handling

Backend API integration

Setup & Run Locally
git clone <frontend-repo-url>
cd frontend
npm install
npm run dev


The app will run at:

http://localhost:5173

Environment Variables

Create a .env file in the frontend root:

VITE_API_URL=https://primetradeai-production-8072.up.railway.app


⚠️ Note:
This variable points to the deployed backend API hosted on Railway.

Backend Integration

The frontend communicates with the backend using REST APIs:

Authentication: /api/v1/auth

Tasks: /api/v1/tasks

Admin APIs: /api/v1/admin

All protected routes require a valid JWT token.

Deployment

Frontend deployed on Vercel
Backend deployed on Railway