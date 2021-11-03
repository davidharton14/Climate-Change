const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
  indice: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("raport", schema);
