# Full Stack Web Development Assessment

> A secure, production-ready MERN stack application featuring JWT authentication, a protected analytics dashboard, and a modern UI — built as a full-stack web development assessment.

---

## 🚀 Live Demo

| | URL |
|---|---|
| **Frontend** | [demo-xi-blush-23.vercel.app](https://demo-xi-blush-23.vercel.app/) |
| **Backend API** | [demo-server-dc40.onrender.com](https://demo-server-dc40.onrender.com/) |

### Test Credentials

> **Email:** `test@test.com`  
> **Password:** `password123`
>
> Use these to instantly access the dashboard without registering.

---

## ✨ Features

- **Secure Authentication** — Passwords hashed with `bcrypt`, sessions managed via `JWT` (1h expiry)
- **User Registration & Login** — Full validation, error handling, and success feedback
- **Protected Routes** — Dashboard guarded by JWT verification middleware (backend) and `ProtectedRoute` wrapper (frontend)
- **Modern Dashboard UI** — Profile card, gradient task cards, Chart.js analytics, meetings sidebar, and skills progress bars
- **Animated Auth Pages** — Canvas-based dot-map animation with Framer Motion transitions
- **RESTful API** — Clean Express.js endpoints with proper HTTP status codes
- **Fully Deployed** — Frontend on Vercel, Backend on Render, Database on MongoDB Atlas

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19 (Vite), Tailwind CSS v4, Framer Motion, Chart.js, Lucide React |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas (Mongoose ODM) |
| **Auth** | JSON Web Tokens, bcrypt |
| **Deployment** | Vercel (frontend), Render (backend) |

---

## 📡 API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `GET` | `/` | Public | Health check |
| `POST` | `/api/register` | Public | Create new user (hashed password) |
| `POST` | `/api/login` | Public | Authenticate & return JWT + user info |
| `GET` | `/api/dashboard` | JWT | Returns leads, tasks, and users data |

---

## 🏗 Local Setup Instructions

### Prerequisites
- Node.js ≥ 18
- MongoDB running locally or a MongoDB Atlas URI

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/mern_demo
JWT_SECRET=your_strong_random_secret_here
JWT_EXPIRY=1h
BCRYPT_SALT_ROUNDS=10
```

Start the server:

```bash
node server.js
```

### 3. Frontend setup

```bash
cd frontend
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000
```

Start the dev server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
├── backend/
│   ├── server.js              # Express app + all routes
│   ├── models/User.js         # Mongoose schema
│   ├── middleware/verifyToken.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/            # Auth UI (animated sign-in)
│   │   │   └── dashboard/     # Dashboard sub-components
│   │   ├── pages/             # Login, Register, Dashboard
│   │   └── lib/utils.js       # Tailwind merge utility
│   └── .env
└── README.md
```

---

## 👤 Author

**Tanish Arora**
