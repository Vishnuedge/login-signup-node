const express = require("express");


const router = express.Router();

const authService = require("../services/auth.service");

// auth/register
router.post("/signdata", async (req, res) => {
  const data = await authService.registration(req.body, res);
  console.log(req.body)
  
  res.send(data);
});

// auth/login
router.post("/logindata", async (req, res, next) => {
  const token = await authService.login(req.body, res);
  console.log(req.body)
  if(token) {
    res.send(token);
    console.log(token)
  }  else {

    res.send('email doesnt exists')
    console.log("user dont exists")
  } 
});

module.exports = router;
