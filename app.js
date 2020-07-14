const express = require("express");

const app = express();
const myParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
app.use(cors());

//const User = require("./models/usermodel");

app.use(myParser.urlencoded({ extended: true }));
app.use(myParser.json({ extended: true })); // need if you want to json data from request
app.use(cookieParser());
const port = process.env.Port || 3001;

app.use("/api", require("./routes/common.js"));

app.get("/", (req, res) => {
  console.log("welcome sanjiv");
  res.send("Welcome to rest api using nodemon");
});

// app.post("/register", (req, res) => {
//   const reg = new User(req.body);
//   res.send(reg);
// });

app.listen(port, () => {
  console.log(`the app listen at port ${port}`);
});
//app.listen(process.env.PORT || 3001);
