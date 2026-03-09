const jwt = require("jsonwebtoken");
const { config } = require("../config/secrets");

/**
 * Standard auth middleware.
 * Extracts JWT from the "x-api-key" header, verifies it, and attaches
 * the decoded payload ({ _id, role }) to req.tokenData.
 */
exports.auth = (req, res, next) => {
  const token = req.header("x-api-key");
  if (!token) {
    return res
      .status(401)
      .json({ msg: "Access denied. No token provided in x-api-key header." });
  }
  try {
    const decoded = jwt.verify(token, config.token_secret);
    req.tokenData = decoded;
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ msg: "Token is invalid or has expired." });
  }
};

/**
 * Admin-only middleware.
 * Verifies the JWT AND checks that the user's role is "admin".
 */
exports.authAdmin = (req, res, next) => {
  const token = req.header("x-api-key");
  if (!token) {
    return res
      .status(401)
      .json({ msg: "Access denied. No token provided in x-api-key header." });
  }
  try {
    const decoded = jwt.verify(token, config.token_secret);
    if (decoded.role !== "admin") {
      return res
        .status(403)
        .json({ msg: "Forbidden. Admin access required." });
    }
    req.tokenData = decoded;
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ msg: "Token is invalid or has expired." });
  }
};
