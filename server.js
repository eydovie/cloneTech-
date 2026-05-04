const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const cryptoRoutes = require("./routes/cryptoRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
    credentials: true,
  }),
);

// Routes
app.use("/", authRoutes);
app.use("/crypto", cryptoRoutes);
app.use("/", userRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Coinbase Clone API is running" });
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI) // Removed the local fallback for safety on Render
  .then(() => {
    console.log("Connected to MongoDB");

    const PORT = process.env.PORT || 5000;

    // Fixed the syntax here: app.listen(port, host, callback)
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Force exit so Render knows the start failed
  });
