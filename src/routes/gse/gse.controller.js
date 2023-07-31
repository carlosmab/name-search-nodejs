const { getGSEResults } = require('../../services/gse.service');

const Search = require('../../models/searchs.model');

async function searchGSE(req, res) {

  const options = req.body.options;
  const user_id = req.body.user_id;

  const searchResults = await getGSEResults(options);
  
  const search = 
    await Search
      .create({
        keyWords: options.keyWords,
        user_id: user_id,
        search_date: new Date(),
        results: searchResults.items
      });
      
  return res.status(200).json(search)
    
}

function getSearchesList(req, res) {
  const user_id = req.body.user_id;

  Search
    .find({ user_id: user_id})
    .then((searches) => {
      console.log(searches);
      return res.status(200).json(searches);
    });

 
}




module.exports = {
  searchGSE,
  getSearchesList
}
