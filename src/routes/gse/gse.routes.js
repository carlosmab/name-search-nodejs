const express = require('express');

const gseRouter =  express.Router();

const {
  searchGSE,
  getSearchesList
} = require('./gse.controller')


gseRouter.post('/gse-search', searchGSE);
gseRouter.post('/searches', getSearchesList);

module.exports = gseRouter