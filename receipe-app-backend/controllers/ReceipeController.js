const ReceipeModel = require("../models/ReceipeModel");
const { Mongoose } = require("mongoose");

exports.getReceipeData = (req, res) => {
    ReceipeModel
        .find()
        .then((response) => res.status(200).json({ message: "Data Fetched Successfully", receipe: response }))
        .catch((err) => console.log(err));
};




