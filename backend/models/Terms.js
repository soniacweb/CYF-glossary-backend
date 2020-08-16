const mongoose = require("mongoose");
const Users = require("./Users");

const Schema = mongoose.Schema;

const termsSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  discription: { type: String },
  link: { type: String },
  tags: [{ type: String }],
});

module.exports = mongoose.model("Terms", termsSchema);
