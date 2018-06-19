const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    "ProductID": {
        required: true,
        type: Number
    },
    "Product": {
        required: true,
        type: String
    },
    "Amount":{
        required:true,
        type: Number
    }
});
module.exports = mongoose.model("Message", schema);