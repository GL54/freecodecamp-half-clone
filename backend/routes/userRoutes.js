const express = require("express");
const router = express.Router();
const { signIn, googleSignIn } = require("./controller/dataController");

router.post("/signIn", signIn);
router.post("/googleSignIn", googleSignIn);
module.exports = router;
