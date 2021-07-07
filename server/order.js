const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  _id: {
    require: true,
    type: Number,
  },
  order: {
    require: true,
    type: Array,
  },
}
);

module.exports = mongoose.model("Order", schema);
