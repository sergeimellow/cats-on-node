var express = require('express');
var router = express.Router();
// Mongoose import
var mongoose = require('mongoose');
// Mongoose connection to MongoDB (ted/ted is readonly)
mongoose.connect('localhost:27017', function (error) {
    if (error) {
        console.log(error);
    }
});

// Mongoose Schema definition
var Schema = mongoose.Schema;
var LinkSchema = new Schema({
    link: String,
});
// Mongoose Model definition
var Link = mongoose.model('links', LinkSchema);
/* GET users listing. */
var silence = new Link({ link: 'https://s-media-cache-ak0.pinimg.com/600x315/76/82/a7/7682a7ce87c79934bddaf9ad289e9d07.jpg' });

silence.save(function (err, silence) {
  if (err) return console.error(err);
  //silence.speak();
});

router.get('/', function(req, res, next) {
  Link.find({ link: "https://s-media-cache-ak0.pinimg.com/600x315/76/82/a7/7682a7ce87c79934bddaf9ad289e9d07.jpg" }, function (err, docs) {
            res.json(docs);
        });
});



module.exports = router;
