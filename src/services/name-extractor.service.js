const nameRecognizer = require('name-recognition')


function deleteDuplicates(results) {
  let unique_results = [results[0]];

  results.forEach((result) => {
    var name_exists = false;
    unique_results.forEach((unique_result) => {
      if (result.name === unique_result.name) {
        name_exists = true;
      }
    });

    if (!name_exists) {
      unique_results.push(result);
    }

  });

  return unique_results;
}


function extractNamesFromText(text) {

  const results = nameRecognizer.find(text, { capitalized: true })
  return deleteDuplicates(results);

}


module.exports = {
  extractNamesFromText
}