const path = require('path');
const fs = require('fs');

const pdfParse = require('pdf-parse');

async function extractTextFromPDF(filename) {
  const dataBuffer = fs.readFileSync(path.join(__dirname, '..', '..', 'uploads', filename));
  return await pdfParse(dataBuffer); 
} 

module.exports = {
  extractTextFromPDF
}
