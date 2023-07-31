const mongoose = require('mongoose');

const extractedNamesSchema = new mongoose.Schema({
  user_id: { type: String},
  extracted_names: { type: Array },
  filename: { type: String},
}, {
  timestamps: true
});

module.exports = mongoose.model("ExtractedNames", extractedNamesSchema)