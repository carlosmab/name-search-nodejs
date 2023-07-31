const {
  extractTextFromPDF
} = require('../../services/pdf-to-text.service');

const {
  extractNamesFromText
} = require('../../services/name-extractor.service');

const ExtractedNames = require('../../models/extract-names.model')

// Non Blocking
function extractNamesFromPDF(req, res) {
  try {
    if (!req.files) {
      return res.status(400).send('file not received');
    }
    else {
      let file = req.files.pdfFile;
      let filename = new Date().getTime() + '.pdf';
     
      file.mv('./uploads/' + filename)
        .then(() => {
          
          extractTextFromPDF(filename)
            .then((extractedText) => {
              
              const extractedNames = extractNamesFromText(extractedText.text);
  
              ExtractedNames.create({
                extracted_names: extractedNames,
                user_id: req.body.user_id,
                filename: filename
              }).then((extractedNames) => {

                return res.status(200).json({ extracted_names: extractedNames });
              
              });
        
            }); 
          });
      
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
}

module.exports = {
  extractNamesFromPDF
}