const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
//   _id: {
//     type: mongoose.Schema.Types.ObjectId,
//     validate: {
//         validator: (value) => mongoose.Types.ObjectId.isValid(value),
//         message: "ID es invalido",
//     },
//     required: true,
//   },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone: {
    type: String,
    require: true,
  },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
