var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'cats on node', next_image: random_image() });
});

function random_image (){
	// replace this with call to random link document in mongodb
	arr = ['http://cdn1-www.cattime.com/assets/uploads/2013/01/file_1650_25-funny-cat-memes.jpg',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Cat_crying_(Lolcat).jpg/300px-Cat_crying_(Lolcat).jpg',
	'https://dropline.net/cats/images/coathanger-cat-3000.jpg',
	'https://s-media-cache-ak0.pinimg.com/600x315/76/82/a7/7682a7ce87c79934bddaf9ad289e9d07.jpg',
	'https://i.ytimg.com/vi/8XuLTGk3DIo/hqdefault.jpg',
	'http://www.lolcats.com/images/u/13/39/tastegood.jpg',
	'http://i0.kym-cdn.com/entries/icons/facebook/000/000/018/happycat.jpg'
			]
	return arr[Math.floor(Math.random()*arr.length)];
};
module.exports = router;
