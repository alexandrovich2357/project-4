const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Pintores = new Schema(
  {
    name: String,
    address: String,
    specialty: String,
    phone: String,
    web: String,
    
  },
  { timestamps: true }
);

const Pintores = mongoose.model("Pintores", pintores);
module.exports = Pintores;
