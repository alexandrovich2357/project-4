const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todo = new Schema({
  name: String,
  address: String,
  specialty: String,
  phone: String
  
},{ timestamps: true }
);

const Todo = mongoose.model('todos', todo);
module.exports = Todo;