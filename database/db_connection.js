// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/";

// module.exports.dbConnection = MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   return db.db("online_vaccination");
// });

const mongoose = require("mongoose");

//Set up default mongoose connection
const mongoDB = "mongodb://127.0.0.1/online_vaccination";
module.exports.dbConnection = mongoose.connect(mongoDB, {
  useNewUrlParser: true,
});
