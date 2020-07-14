const express = require("express");

const router = express.Router();
const user_controller = require("../controller/users");
const validation = require("../helper/validation");
const {
  signIn,
  welcome,
  refresh,
  auth,
  welcomex,
} = require("../auth/handlers");

const { createApplicant } = require("../controller/applicant");

router.get("/user", auth, user_controller.getuser);
router.get("/userById", auth, user_controller.getuserById);
router.post("/user", validation.user, user_controller.postuser);
// router.put('/user',validation.user, user_controller.updateuser);
// router.delete('/user', user_controller.deleteuser);

router.post("/signin", signIn);
router.get("/welcome", welcome);
router.post("/refresh", refresh);
router.get("/welcomex", auth, welcomex);

router.post("/applicant", validation.applicant, createApplicant);
module.exports = router;
