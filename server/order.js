const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  order: {
    require: false,
    type: Array,
  },
}
);

module.exports = mongoose.model("Order", schema);
