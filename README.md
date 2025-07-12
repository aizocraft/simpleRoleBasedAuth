
# Simple Authentication App with Role-Based Access Control

A full-stack authentication application with React frontend and Node.js backend, featuring role-based access control (admin, manager, sales).

## Features

- User registration and login
- JWT authentication
- Role-based authorization (admin, manager, sales)
- Protected routes
- Responsive UI

## Technologies

**Frontend:**
- React 18
- Vite
- React Router 6
- Axios

**Backend:**
- Node.js
- Express
- MongoDB (with Mongoose)
- Bcrypt.js (password hashing)
- JSON Web Tokens (JWT)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/auth-app.git
   cd auth-app
   ```
2. **Install backend dependencies:**

```bash
cd backend
npm install
```

3. **Install frontend dependencies:**

```bash
cd ../frontend
npm install
``` 
4. **Set up environment variables:**

Create a .env file in the backend directory:

```text
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```
5. **Running the Application**
Start the backend server:

```bash
cd backend
npm start
``` 
Start the frontend development server:

```bash
cd ../frontend
npm run dev
```
6. **Access the application:**
```
Frontend: http://localhost:5173

Backend API: http://localhost:5000
```

*Project Structure*
```text
auth-app/
├── backend/              # Node.js backend
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── app.js            # Express app setup
│   └── server.js         # Server entry point
│
├── frontend/             # React frontend
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API services
│   │   ├── App.jsx       # Main app component
│   │   └── main.jsx      # Entry point
│   └── vite.config.js    # Vite configuration
│
├── .gitignore            # Git ignore file
└── README.md             # This file
```



API Endpoints
```Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login existing user
```
License
This project is licensed under the MIT License.
