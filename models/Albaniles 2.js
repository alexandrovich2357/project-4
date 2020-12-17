const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let albaniles = new Schema(
  {
    name: String,
    address: String,
    specialty: String,
    phone: String,
    web: String,
    
  },
  { timestamps: true }
);

const Albaniles = mongoose.model("Albaniles", albaniles);
module.exports = Albaniles;
