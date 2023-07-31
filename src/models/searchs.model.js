const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
  keyWords: { type: Array },
  user_id: { type: String },
  results: { type: Array},
}, {
  timestamps: true 
});

module.exports = mongoose.model("Search", searchSchema)