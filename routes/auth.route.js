const express = require("express");


const router = express.Router();

const authService = require("../services/auth.service");

// auth/register
router.post("/signdata", async (req, res) => {
  const data = await authService.registration(req.body, res);
  res.send(data);
});

// auth/login
router.post("/logindata", async (req, res, next) => {
  const token = await authService.login(req.body, res);
  res.send(token);
  console.log("Logged in succesfully")
});

module.exports = router;
