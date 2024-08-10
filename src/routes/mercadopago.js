const express = require("express");

const router = express.Router();

router.get("/", () => {
  res.send("Hello, i am a route named /mercadopago");
});

module.exports = router;
