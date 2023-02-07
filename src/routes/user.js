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

app.post("/signup", async (req, res) => {
  let { email } = req.body;
  let user = await User.findOne({ email });
  try {
    if (user) {
      return res
        .status(400)
        .send(
          "This email has already resigtered with another account please use different email"
        );
    }
    let newUser = new User({ ...req.body });
    await newUser.save();
    return res.status(200).send(newUser);
  } catch (er) {
    return res.status(404).send(er.message);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).send({ msg: "These fields are required" });
  }

  try {
    const user = await UserModel.findOne({ email, password });
    if (user) {
      return res
        .status(200)
        .send({ data: user, msg: "User login successfully" });
    } else {
      return res
        .status(401)
        .send({ msg: "Email or Password is not not match" });
    }
  } catch (er) {
    return res.status(500).send({ msg: er.message });
  }
});

app.get("/search", async (req, res) => {
  let keyword = {};
  if (req.query.q) {
    keyword = req.query.q;
  }
  console.log(keyword);
  try {
    const AllUser = await User.find({
      name: { $regex: keyword, $options: "i" },
    });
    return res.status(200).send(AllUser);
  } catch (er) {
    return res.status(404).send(er.message);
  }
});

module.exports = app;
