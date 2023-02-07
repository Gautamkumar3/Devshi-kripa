const mongoose = require("mongoose");
require("dotenv").config();

const Connect = () => {
  return mongoose.connect(
    `mongodb+srv://gautam:gautam@emi-calculator.drryt5k.mongodb.net/devshi`
  );
};

module.exports = Connect;
