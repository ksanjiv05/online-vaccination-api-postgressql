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

router.post("/signin", signIn);
router.get("/welcome", welcome);
router.post("/refresh", refresh);
router.get("/welcomex", auth, welcomex);

module.exports = router;
