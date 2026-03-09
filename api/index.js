/**
 * Vercel Serverless Function entry point.
 * Exports the Express app so Vercel can handle API requests.
 * All routes defined in server/app.js are available here.
 */
const app = require("../server/app");

module.exports = app;
