const dbConnection = require("../database/db_connection");
const Applicant = require("../models/applicantmodel");
const mongoose = require("mongoose");

module.exports.createApplicant = async (req, res) => {
  try {
    const db = (await dbConnection.dbConnection).connection;

    const user = new Applicant(req.body);
    let status = false;
    await user.save(function (err) {
      if (err) {
        console.log(err);
        //return "error";
      }
      console.log("applicant created ");
      status = true;
      //return "success";
    });
    console.log(status);
    return status;
  } catch (err) {
    console.log(err.message);
  }
};
