var express = require('express'),
    request = require('request'),
    fs      = require("fs");

var router = express.Router();

/* GET quotes. */

router.get('/', function(req, res, next) {
  var quotes = readJsonFileSync('public/javascripts/quotes.json');
  res.send(quotes);
});

function readJsonFileSync(filepath){
    var file = fs.readFileSync(filepath, 'utf8');
    return file;
}

module.exports = router;
