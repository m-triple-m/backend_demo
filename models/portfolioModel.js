const mongoose = require("../connection");

const schema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: "users" },
  data: Object,
  created: { type: Date, default: new Date() },
});

const model = mongoose.model("portfolios", schema);

module.exports = model;
