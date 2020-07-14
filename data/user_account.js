const dbConnection = require("../database/db_connection");
const User = require("../models/usermodel");
const mongoose = require("mongoose");

module.exports.createuser = async (req, res) => {
  try {
    const db = (await dbConnection.dbConnection).connection;

    const user = new User(req.body);
    user.save(function (err) {
      if (err) {
        console.log(err);
        return "error";
      }
      console.log("user created ");
      return "success";
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports.usercheck = async (username, password) => {
  const User = mongoose.model("User");
  console.log(username);
  const userExist = User.findOne({ email: username }, "name email", function (
    err,
    responce
  ) {
    if (err) return "error";
    console.log(responce);
    return "success";
  });
};

module.exports.login = async (username, password) => {
  const User = mongoose.model("User");
  console.log(username, "and pass ", password);
  try {
    let status = false;
    await User.findOne({ email: username }, "name email password", function (
      err,
      responce
    ) {
      if (err) {
        // console.log("responce err ", err);
        status = false;
        //return false;
      }
      console.log("responce ", responce);
      if (responce == null) {
        status = false;
        return; //false
      }
      if (responce.password === password) {
        status = true;
        // console.log("password auth ", responce.password, status);
        //return true;
      }
      //return false;
    });
    // console.log("status is ", status);
    return status;
  } catch (err) {
    console.log("err catached ", err);
  }
};
