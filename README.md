# 🎓 Students Courses Management System – v2

A modern full-stack web application for managing student courses, assignments, and instructor-student interactions.

## 🛠 Tech Stack

- **Frontend:** React, TypeScript, Vite, React Router v7, Tailwind CSS
- **Backend:** PHP (as API), MySQL
- **Communication:** REST API (JSON)
- **Routing:** React Router v7 (BrowserRouter + Routes/Route)

## 📁 Project Structure

```
Students_courses_management-v2/
├── client/                     # React frontend
│   ├── src/
│   │   ├── components/         # Shared UI components (Navbar, Footer, etc.)
│   │   ├── pages/              # Route components (Courses, Login, etc.)
│   │   ├── App.tsx             # Routes defined here using React Router v7
│   │   └── main.tsx            # React entry point with BrowserRouter
├── server/                     # PHP backend (API)
│   ├── api/                    # PHP files handling API requests
│   └── db.php                  # DB connection setup
```

## ⚙️ Setup Instructions

### 1. Backend (PHP & MySQL)

- Start Apache & MySQL using XAMPP or similar
- Place the `server/` folder inside `htdocs/` or your web root
- Create a MySQL database and update the credentials in `db.php`
- Access your PHP endpoints at: `http://localhost/server/api/...`

### 2. Frontend (React with React Router v7)

```bash
cd client
npm install
npm install react-router-dom
npm run dev
```

React will run at `http://localhost:5173`

## 📌 Features

- Student & Instructor login
- Course listing and registration
- Assignment uploads and deadlines
- Messaging between students and instructors
- Material downloads
