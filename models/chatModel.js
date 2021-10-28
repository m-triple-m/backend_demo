const mongoose = require("../connection");

const schema = new mongoose.Schema({
  sender: { type: mongoose.Types.ObjectId, ref: "users" },
  reciever: { type: mongoose.Types.ObjectId, ref: "users" },
  created: { type: Date, default: new Date() },
});

const model = mongoose.model("chats", schema);

module.exports = model;
