const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static("public")); // serves index.html, password.html, etc.

// MongoDB connection
mongoose.connect("mongodb+srv://amarnathsooraj:amarnath%40mongodb123@dbcluster.uuvw1xp.mongodb.net/?retryWrites=true&w=majority&appName=DBCluster", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

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
    console.log("📥 Data received:", req.body); // <-- check terminal
    const { email, password } = req.body;

    const newUser = new User({ email, password });
    await newUser.save(); // save to MongoDB

    res.send("✅ Data saved to MongoDB");
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Error saving to database");
  }
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
