const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("./models/User");
const verifyToken = require("./middleware/verifyToken");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// Health-check route
app.get("/", (req, res) => {
  res.json({ message: "API is running 🚀" });
});

// ─── AUTH ROUTES ────────────────────────────────────────────

// POST /api/register — Create a new user
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS) || 10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({
      message: "User registered successfully",
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("Register error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/login — Authenticate user & return JWT
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRY || "1h" }
    );

    res.json({
      token,
      user: { name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// ─── PROTECTED ROUTES ───────────────────────────────────────

// GET /api/dashboard — Protected with JWT
app.get("/api/dashboard", verifyToken, (req, res) => {
  const leads = [
    { id: 1, name: "Acme Corp", status: "New", value: "$12,000" },
    { id: 2, name: "Globex Inc", status: "Contacted", value: "$8,500" },
    { id: 3, name: "Initech", status: "Qualified", value: "$23,000" },
  ];

  const tasks = [
    { id: 1, title: "Follow up with Acme", due: "2026-03-28", done: false },
    { id: 2, title: "Send proposal to Globex", due: "2026-03-29", done: false },
    { id: 3, title: "Schedule demo with Initech", due: "2026-03-30", done: true },
  ];

  const users = [
    { id: 1, name: "Alice Johnson", role: "Admin" },
    { id: 2, name: "Bob Smith", role: "Sales Rep" },
    { id: 3, name: "Carol Lee", role: "Manager" },
  ];

  res.json({
    message: `Welcome back, ${req.user.email}`,
    leads,
    tasks,
    users,
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🟢 Server listening on port ${PORT}`);
});
