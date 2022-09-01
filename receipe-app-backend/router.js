const express = require("express");
const ReceipeController = require("./controllers/ReceipeController");


const router = express.Router();


router.get("/getReceipeData", ReceipeController.getReceipeData);


module.exports = router;
