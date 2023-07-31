const express = require('express');
const extractNamesRoutes = express.Router();

const {
  extractNamesFromPDF
} = require('./extract-names.controller');

extractNamesRoutes.post("/extract-names", extractNamesFromPDF);

module.exports = extractNamesRoutes;

