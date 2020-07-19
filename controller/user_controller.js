const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const { UserTableInsert, GetUsers } = require("../data/user_data");

module.exports.getUsers = async (req, res) => {
  try {
    console.log(req.body.email);
    const users = await GetUsers();
    console.log("----------------", users);
    if (users) {
      return res.status(200).json({ success: users });
    }
    return res.status(400).json({ responce: "bad request" });
  } catch (error) {
    res.json({ message: "here some error " });
  }
};
// module.exports.getUserById = async function (req, res) {
//   try {
//     const User = mongoose.model("User");
//     console.log(req.body.email);
//   } catch (error) {
//     res.json({ message: "here some error" });
//   }
// };

module.exports.postUser = async function (req, res) {
  try {
    console.log("0000000====", req.body);
    const errors = validationResult(req);
    console.log(errors.array());
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    // const User = mongoose.model("User");
    // console.log(req.body.email);
    const { name, email, password, dob } = req.body;
    console.log(email);
    const status = await UserTableInsert(name, email, password, dob);
    if (status) {
      return res.status(200).json({ success: "User Update Successfully" });
    }
    return res.status(400).json({ errors: "bad request " });
  } catch (error) {
    res.json({ message: "here some error" });
  }
};

// const status = UserTableInsert(
//   "ksanjiv",
//   "kksanjiv05@gmail.com",
//   "$@tiy@0005",
//   "20/02/1997"
// );
