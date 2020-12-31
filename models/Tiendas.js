const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let tiendas = new Schema(
  {
    name: String,
    address: String,
    specialty: String,
    phone: String,
    web: String,
    imageUrl: {type: String}
  },
  { timestamps: true }
);

const Tiendas = mongoose.model("Tiendas", tiendas);
module.exports = Tiendas;
