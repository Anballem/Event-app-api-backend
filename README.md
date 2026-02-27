
# 📅 Event App – Backend API

REST API for managing events with authentication.
Built using Node.js, Express, and MongoDB.

---

## 🌐 Base URL

https://your-backend-url.com/api

---

## 📌 Features

- User authentication (JWT)
- Password hashing (bcrypt)
- CRUD operations for events
- Protected routes
- MongoDB database integration

---

## 🛠 Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- dotenv

---

## 📂 Project Structure

server/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
└── server.js

---

## 🔐 Authentication

Passwords are hashed using bcrypt before storage.

Login endpoint:

POST /api/auth/login

Body:

{
"username": "user",
"password": "password"
}

Successful response:

{
"token": "JWT_TOKEN"
}

All protected routes require:

Authorization: Bearer <token>

---

## 📅 Event Model

{
name: String,
location: String,
description: String,
datetime: Date,
createdBy: ObjectId
}

---

## 📡 API Endpoints

### Auth

POST /api/auth/login

---

### Events (Protected)

GET /api/events  
POST /api/events  
PUT /api/events/:id  
DELETE /api/events/:id

---

## ⚙ Installation

Clone repository:

git clone https://github.com/anballem/Event-app-api-backend.git

Install dependencies:

npm install

Created a .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run server:

npm run dev

---

## 🔒 Security Features
- JWT authentication
- Environment variables for secrets
- Protected routes middleware

---

## 🚀 Deployment

Backend deployed on:
- Render

---

## 🧪 Future Improvements

- User registration endpoint
- Role-based permissions
- Input validation with Joi
- Logging with Morgan
- Rate limiting
- Swagger API documentation

---

## 👩‍💻 Author
Annette 
GitHub: https://github.com/anballem

