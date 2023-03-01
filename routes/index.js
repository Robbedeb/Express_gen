const express = require('express');
const test = express.Router();

test.get('/test', (request, response) => {
    response.send('Hello');
  });

module.exports = test;
