const axios = require('axios');

const {
  GSE_API_KEY,
  GSE_ID,
  GSE_URL
} = process.env;

const baseUrl = `${GSE_URL}&key=${GSE_API_KEY}&cx=${GSE_ID}`;


getFullUrl = (options) => {
  const { keyWords } = options;
  return baseUrl + "&exactTerms=" + keyWords.join('%20')
}


getGSEResults = async (options) => {
  
  const results = await axios.get(getFullUrl(options));
  return results.data;

}


module.exports = {
  getGSEResults,
};
