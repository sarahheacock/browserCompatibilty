// const Word = require('../models/word.js');
const fs = require('fs');
const path = require("path");

let content;
const WordController = {
  newWord: (req, res, next) => {
    // console.log(res);
    fs.readFile("browser.json", function(err, data) {
      // console.log(data);
      if (err) return res.send(err);
      content = JSON.parse(data);
      // console.log(content);
      res.json(content);
    });
  }
}

module.exports = WordController;
// var fs = require('fs');
// var obj;
// fs.readFile('file', 'utf8', function (err, data) {
//  if (err) throw err;
//  obj = JSON.parse(data);
// });
