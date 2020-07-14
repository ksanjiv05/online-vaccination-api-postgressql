const { check } = require("express-validator");

const validatioschema = {
  login: [
    // username must be an email
    check("username").isEmail(),
    // password must be at least 5 chars long
    check("password")
      .isLength({ min: 5 })
      .withMessage("must be at least 5 chars long")
      .matches(/\d/)
      .withMessage("must contain a number"),
  ],
  user: [
    check("id")
      .isString()
      .withMessage(
        "Id must be hash string if you new user no need to provide it automatically created"
      )
      .optional(),
    check("name").exists().withMessage("Name is required"),
    check("username").isEmail().withMessage("Please enter valid email"),
    // check("phone")
    //   .isMobilePhone()
    //   .isLength({ min: 10, max: 10 })
    //   .withMessage("Please enter valid mobile number"),
    check("email").isEmail().withMessage("Please enter valid email"),
    check("password")
      .isLength({ min: 5 })
      .withMessage("must be at least 5 chars long")
      .matches(/\d/)
      .withMessage("must contain a number"),
    check("passwordConfirmation")
      .exists()
      .custom((value, { req }) => value === req.body.password)
      .withMessage(
        "Confirmation password field must have be same value as the password field"
      ),
  ],
  applicant: [
    check("id")
      .isString()
      .withMessage(
        "Id must be hash string if you new user no need to provide it automatically created"
      )
      .optional(),
    check("name").exists().withMessage("Name is required"),
    check("father").exists().withMessage("father is required"),
    check("mother").exists().withMessage("mother is required"),
    check("dob")
      .exists()
      .isDate({ format: "DD-MM-YYYY" })
      .withMessage("dob is required"),
  ],
};

module.exports = validatioschema;
