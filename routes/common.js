const express = require("express");

const router = express.Router();
const validation = require("../helper/validation");
const {
  signIn,
  welcome,
  refresh,
  auth,
  welcomex,
} = require("../auth/auth-handlers");

const user_contoller = require("../controller/user_controller");

router.post("/signin", signIn);
router.get("/welcome", welcome);
router.post("/refresh", refresh);
router.get("/welcomex", auth, welcomex);

router.post("/adduser", validation.user, user_contoller.postUser);
router.get("/getusers", user_contoller.getUsers);

module.exports = router;
