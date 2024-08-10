const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, i am a route named /mp");
});

module.exports = router;
