const mongoose = require("mongoose");

const rentalRequestSchema = new mongoose.Schema({
  cartItems: [
    { image: String, title: String, price: Number, quantity: Number },
  ],
  customerInformation: {
    first: String,
    last: String,
    email: String,
    address: String,
    phone: String,
    date: Date,
    delivery: Boolean,
    notes: String,
    referal: Number,
  },
  totalCost: Number,
  status: String,
});

const RentalRequest = mongoose.model("RentalRequest", rentalRequestSchema);

module.exports = RentalRequest;
