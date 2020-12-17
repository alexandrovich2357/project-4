const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let fontaneros = new Schema(
  {
    name: String,
    address: String,
    specialty: String,
    phone: String,
    web: String,
    
  },
  { timestamps: true }
);

const Fontaneros = mongoose.model("Fontaneros", fontaneros);
module.exports = Fontaneros;
