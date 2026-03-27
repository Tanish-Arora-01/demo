# Project Context — MERN Stack Assessment

> **Last updated:** 2026-03-27T22:55:00+05:30

## Backend (`backend/`) — Port 5000
Express.js + Mongoose + bcrypt + JWT + dotenv + CORS

| Method | Path             | Auth   | Description                           |
|--------|------------------|--------|---------------------------------------|
| POST   | `/api/register`  | Public | Create user (bcrypt hash)             |
| POST   | `/api/login`     | Public | Returns JWT (1h) + user name/email    |
| GET    | `/api/dashboard` | JWT    | Returns dummy leads, tasks, users     |

## Frontend (`frontend/`) — Port 5173

### Tech Stack
React 19 (Vite), Tailwind CSS v4, Framer Motion, Chart.js, Lucide React

### Structure
```
frontend/src/
├── App.jsx
├── index.css                       # Tailwind + Shadcn CSS variables
├── lib/utils.js                    # cn() utility
├── components/
│   ├── ProtectedRoute.jsx
│   ├── ui/
│   │   ├── travel-connect-auth.jsx # Animated login/register
│   │   └── background-gradient-glow.jsx
│   └── dashboard/
│       ├── ProfileCard.jsx         # Circular gauge + stats
│       ├── TaskCards.jsx           # Gradient cards (83%, 56%)
│       ├── TrackersConnected.jsx   # Figma/Slack/Jira
│       ├── FocusChart.jsx          # Chart.js line graph
│       ├── MeetingsList.jsx        # Sidebar meetings list
│       └── SkillsProgress.jsx     # Progress bars + trends
└── pages/
    ├── Login.jsx                   # TravelConnectAuth mode="login"
    ├── Register.jsx                # TravelConnectAuth mode="register"
    └── Dashboard.jsx               # Full grid layout
```
