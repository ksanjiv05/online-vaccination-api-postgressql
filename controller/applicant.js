const applicant = require("../data/applicant");
const { validationResult } = require("express-validator");

const createApplicant = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const responceMsg = await applicant.createApplicant(req, res);
    console.log(responceMsg);
    if (responceMsg)
      return res.status(422).json({ error: "appicant creation failed !!!" });
    return res.status(200).json({ success: "applicnt created !!!" });
  } catch (error) {
    console.log(error);
    res.json({ message: "here some error" });
  }
};

module.exports = {
  createApplicant,
};
