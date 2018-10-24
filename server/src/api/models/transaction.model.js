const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  sentAmount: Number,
  sentAmountCurrency: String,
  receivedAmount: Number,
  receivedAmountCurrency: String,
  commissionAmount: Number,
  totalAmount: Number,
  bankOrCash: String,
  rateOfExchange: Number,
  sentCountryName: String,

});
