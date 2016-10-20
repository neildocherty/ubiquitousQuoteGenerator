var express = require('express');
var request = require('request');

var router = express.Router();

var apiKey = 'YOUR_KEY'

/* GET images. */
router.get('/', function(req, res, next) {

  request.get('https://api.unsplash.com/collections/388107/photos?client_id='+apiKey+'', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  })

});

module.exports = router;
