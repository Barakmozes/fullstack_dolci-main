const express = require("express");
const bcrypt = require("bcrypt");
const { auth, authAdmin } = require("../middlewares/auth");
const {
  UserModel,
  validateUser,
  validateLogin,
  createToken,
} = require("../models/userModel");

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ msg: "Users endpoint" });
});

// Verify token and return decoded payload (role, _id)
router.get("/checkToken", auth, async (req, res) => {
  try {
    res.json(req.tokenData);
  } catch (err) {
    res.status(502).json({ err });
  }
});

// Admin: list users with pagination
router.get("/usersList", authAdmin, async (req, res) => {
  let perPage = Math.min(req.query.perPage, 20) || 20;
  let page = req.query.page - 1 || 0;
  let sort = req.query.sort || "_id";
  let reverse = req.query.reverse == "yes" ? 1 : -1;

  try {
    let data = await UserModel.find({})
      .limit(perPage)
      .skip(page * perPage)
      .sort({ [sort]: reverse });
    res.json(data);
  } catch (err) {
    res.status(502).json({ err });
  }
});

// Get current user info (excludes password)
router.get("/userInfo", auth, async (req, res) => {
  try {
    let user = await UserModel.findOne(
      { _id: req.tokenData._id },
      { password: 0 }
    );
    res.json(user);
  } catch (err) {
    res.status(502).json({ err });
  }
});

// Sign up
router.post("/", async (req, res) => {
  let validBody = validateUser(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    let user = new UserModel(req.body);
    user.password = await bcrypt.hash(user.password, 10);
    await user.save();
    user.password = "***";
    res.json(user);
  } catch (err) {
    if (err.code == 11000) {
      return res
        .status(400)
        .json({ msg: "Email already in system", code: 11000 });
    }
    res.status(502).json({ err });
  }
});

// Login — BUG FIXED: was "/logIn" (capital I), frontend calls "/login" (lowercase)
router.post("/login", async (req, res) => {
  let validBody = validateLogin(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    let user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ msg: "Email Wrong." });
    }
    let validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(401).json({ msg: "Password Wrong." });
    }
    let token = createToken(user._id, user.role);
    res.json({ token, role: user.role });
  } catch (err) {
    res.status(502).json({ err });
  }
});

// Admin: change user role
router.patch("/changeRole/:id/:role", authAdmin, async (req, res) => {
  try {
    const id = req.params.id;
    const newRole = req.params.role;
    if (id == req.tokenData._id || id == "63b2a02cee44ada32ecbe89e") {
      return res
        .status(401)
        .json({
          err: "You cant change your user role or the super admin",
        });
    }
    const data = await UserModel.updateOne({ _id: id }, { role: newRole });
    res.json(data);
  } catch (err) {
    res.status(502).json({ err });
  }
});

// Delete user
router.delete("/:id", auth, async (req, res) => {
  try {
    let id = req.params.id;
    let data;
    if (req.tokenData.role == "admin") {
      data = await UserModel.deleteOne({ _id: id });
    } else {
      data = await UserModel.deleteOne({
        _id: id,
        user_id: req.tokenData._id,
      });
    }
    res.json(data);
  } catch (err) {
    res.status(502).json({ err });
  }
});

module.exports = router;
