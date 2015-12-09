var express = require('express');
var router = express.Router();
var google = require('googleapis');

var google2 = "213";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cat MEME Generator', google: google2 });
});

module.exports = router;
