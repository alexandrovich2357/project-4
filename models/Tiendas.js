const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let tiendas = new Schema(
  {
    name: String,
    address: String,
    specialty: String,
    phone: String,
    web: String,
    imageUrl: {type: String, ref: 'Image', default: 'https://www.eguardtech.com/wp-content/uploads/2018/08/Network-Profile.png'}
  },
  { timestamps: true }
);

const Tiendas = mongoose.model("Tiendas", tiendas);
module.exports = Tiendas;
