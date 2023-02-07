const express = require("express");
const User = require("../model/user");

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    let allUser = await User.find();
    res.status(200).send(allUser);
  } catch (er) {
    res.status(404).send(er.message);
  }
});

app.post("/", async (req, res) => {
  try {
    let user = new User({ ...req.body });
    await user.save();
    res.status(200).send(user);
  } catch (er) {
    res.status(404).send(er.message);
  }
});

module.exports = app;
