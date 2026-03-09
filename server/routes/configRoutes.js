const usersR = require("./users");
const companiesR = require("./companies");
const devicesR = require("./devices");

/**
 * Central route registry.
 * Mounts API route groups under their respective prefixes.
 *
 * NOTE: No SPA fallback — Vercel serves the React build as static files.
 * For local dev, the React dev server (port 3000) proxies API requests
 * to the Express server (port 5000).
 */
exports.routesInit = (app) => {
  app.use("/users", usersR);
  app.use("/companies", companiesR);
  app.use("/devices", devicesR);
};
