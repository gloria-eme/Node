const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true},
    price: { type: Number, required: true},
    date: { type: Number},
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users'}]
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("expenses", expenseSchema);