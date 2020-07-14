const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: String,
  name: {
    type: String,
    min: [5, "Please enter valid name"],
    max: 20,
    required: [true, "Name is required !!!"],
  },
  username: String,
  email: String,
  //phone: String,
  password: String,
});

module.exports = mongoose.model("User", userSchema);
