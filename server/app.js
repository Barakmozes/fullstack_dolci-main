const express = require("express");
const path = require("path");
const cors = require("cors");

// DB connection — import triggers mongoose.connect()
require("./db/mongoConnect");

const { routesInit } = require("./routes/configRoutes");

const app = express();

// ── Middleware ─────────────────────────────────────────────────────────────

// Enable CORS for the React dev server (localhost:3000) and any deployed client
app.use(cors());

// Parse incoming JSON bodies
app.use(express.json());

// Serve static assets from /public (e.g. uploaded images)
app.use(express.static(path.join(__dirname, "public")));

// ── API health check ───────────────────────────────────────────────────────
app.get("/api/health", (req, res) => {
  res.json({ msg: "DOLCI API is live!", status: 200, timestamp: new Date() });
});

// ── All API routes ─────────────────────────────────────────────────────────
routesInit(app);

module.exports = app;
