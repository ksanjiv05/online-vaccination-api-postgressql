const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
  id: String,
  name: {
    type: String,
    min: [5, "Please enter valid name"],
    max: 20,
    required: [true, "Name is required !!!"],
  },
  father: String,
  mother: String,
  weight: String,
  height: String,
});

module.exports = mongoose.model("Applicant", applicantSchema);
