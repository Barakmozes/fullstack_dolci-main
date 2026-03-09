const mongoose = require("mongoose");
const { config } = require("../config/secrets");

mongoose.set("strictQuery", false);

// Support both a single MONGODB_URI env var (Vercel-friendly) and the
// legacy DB_USER / DB_PASS pair with a hardcoded cluster hostname.
const URI =
  process.env.MONGODB_URI ||
  `mongodb+srv://${config.db_user}:${config.db_pass}@mozesdatab.26qfwhe.mongodb.net/dolci`;

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully."))
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });

module.exports = mongoose.connection;
