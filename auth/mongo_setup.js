const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1/online_vaccination", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;
const UserDetail = new Schema({
  username: String,
  password: String,
});

UserDetail.plugin(passportLocalMongoose);
module.exports.UserDetails = mongoose.model("userInfo", UserDetail, "userInfo");
