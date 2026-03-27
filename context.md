# Project Context — MERN Stack Assessment

> **Last updated:** 2026-03-27T23:30:00+05:30

## Deployed URLs
- **Frontend:** https://demo-xi-blush-23.vercel.app/
- **Backend:** https://demo-server-dc40.onrender.com

---

## Backend (`backend/`) — Port 5000
Express.js + Mongoose + bcrypt + JWT + dotenv + CORS

| Method | Path             | Auth   | Description                           |
|--------|------------------|--------|---------------------------------------|
| POST   | `/api/register`  | Public | Create user (bcrypt hash)             |
| POST   | `/api/login`     | Public | Returns JWT + user name/email         |
| GET    | `/api/dashboard` | JWT    | Returns dummy leads, tasks, users     |

### Environment Variables (`.env`)
`PORT`, `MONGO_URI`, `JWT_SECRET`, `CORS_ORIGIN`, `JWT_EXPIRY`, `BCRYPT_SALT_ROUNDS`

---

## Frontend (`frontend/`) — Vite + React 19
Tailwind CSS v4, Framer Motion, Chart.js, Lucide React

### Environment Variables (`.env`)
`VITE_API_URL` — backend base URL

### Key Components
```
src/components/ui/travel-connect-auth.jsx   # Animated login/register
src/components/dashboard/                    # ProfileCard, TaskCards, FocusChart, etc.
```
