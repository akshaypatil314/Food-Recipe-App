const mongoose = require("mongoose");

const schema = mongoose.Schema;

const receipeSchema = new schema({
    name: {
        type: String,
        required: 'This field is required.'
    },

    image: {
        type: String,
        required: 'This field is required.'
    }
});


module.exports = mongoose.model("ReceipeModel", receipeSchema, "receipe");
