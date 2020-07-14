/* eslint-disable consistent-return */
/* eslint-disable func-names */
const { validationResult } = require("express-validator");
const dbConnection = require("../database/db_connection");
const mongoose = require("mongoose");
const usr = require("../data/user_account");

module.exports.getuser = async function (req, res) {
  try {
    const User = mongoose.model("User");
    console.log(req.body.email);
    const userExist = User.find({}, "name email", function (err, responce) {
      if (err) return res.status(422).json({ error: "Error !!!" });
      console.log(responce);
      return res.status(422).json({ success: responce });
    });
  } catch (error) {
    res.json({ message: "here some error " });
  }
};
module.exports.getuserById = async function (req, res) {
  try {
    const User = mongoose.model("User");
    console.log(req.body.email);
    const userExist = User.findOne(
      { email: req.body.email },
      "name email",
      function (err, responce) {
        if (err) return res.status(422).json({ error: "Error !!!" });
        console.log(responce);
        return res.status(200).json({ success: responce });
      }
    );
  } catch (error) {
    res.json({ message: "here some error" });
  }
};

module.exports.postuser = async function (req, res) {
  try {
    console.log("0000000====", req.body);
    const errors = validationResult(req);
    console.log(errors.array());
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const User = mongoose.model("User");
    console.log(req.body.email);
    const userExist = User.findOne(
      { email: req.body.email },
      "name email",
      function (err, responce) {
        if (err) return res.status(422).json({ error: "Error !!!" });
        console.log(responce);
        if (responce == null) {
          const responceMsg = usr.createuser(req, res);
          if (responceMsg === "error")
            return res.status(422).json({ error: "User creation failed !!!" });
          return res.status(200).json({ success: "User created !!!" });
        }
        return res.status(422).json({ error: "User already Exist !" });
      }
    ); //.where("email").equals(req.body.email);
  } catch (error) {
    res.json({ message: "here some error" });
  }
};

// module.exports.updateuser = async function (req, res) {
//   try {
//     const errors = validationResult(req);
//     if (req.body.id == null || req.body.id === '') return res.status(422).json({ error: 'Please provide valid Id' });
//     if (!errors.isEmpty()) {
//       return res.status(422).json({ errors: errors.array() });
//     }
//     const msg = new User(req.body);
//     usr.updateuser(msg.toJSON(), req, res);
//   } catch (error) {
//     res.json({ message: 'here some error' });
//     // errorLog.error(`Error occured while updating access log : ${error},`);
//   }
// };
// module.exports.deleteuser = async function (req, res) {
//   try {
//     if (req.body.id == null || req.body.id === '') return res.status(422).json({ error: 'Please provide valid Id' });
//     usr.deleteuser(req.body.id, req, res);
//   } catch (error) {
//     res.json({ message: 'here some error' });
//     // errorLog.error(`Error occured while updating access log : ${error},`);
//   }
// };

// module.exports.loginuser = async function (req, res) {
//   try {
//     // Finds the validation errors in this request and wraps them in an object with handy functions
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(422).json({ errors: errors.array() });
//     }
//     usr.userlogin(req, res);
//   } catch (error) {
//     res.json({ message: 'here some error' });
//     // errorLog.error(`Error occured while updating access log : ${error},`);
//   }
// };
