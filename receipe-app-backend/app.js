const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const router = require("./router");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const port = 4040;
const host = "localhost";
const uri = "";


app.use("/", router);

mongoose.connect(uri, {}, (error) => {
    if (!error) console.log("MongoDB connected");
    console.log(error);
});

app.listen(port, host, () => {
    console.log("Server started");
});
