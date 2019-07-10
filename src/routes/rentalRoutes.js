const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("get car rentals");
});

module.exports = router;
