const mongoose = require("../connection");

const schema = new mongoose.Schema({
  title: String,
  description: String,
  tags: Array,
  heroimage: String,
  data: String,
  created: { type: Date, default: new Date() },
  author: { type: mongoose.Types.ObjectId, ref: "users" },
});

const model = mongoose.model("files", schema);

module.exports = model;
