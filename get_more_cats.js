//various ways of gathering more links to images of cats
var api_keys = require('./api_keys');
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var d = new Date();
var day = d.getDate()
var month = monthNames[d.getMonth()];
var year = d.getFullYear();
// console.log(year);
// console.log(day);
// console.log(d);
// function searches google images for new cat links and stores the links in mongodb
function google_for_cats() {
	var key = api_keys.cse_api_key();
	var id = api_keys.cse_id();
	// think of other queries that can generate good memes
	var query = "cat+meme"+ "+" + month + "+" + day + "+" + year;
	// random example
	// https://www.googleapis.com/customsearch/v1?key=YOUR_API_KEY&cx=YOUR_CSE_ID&q=flower&searchType=image&fileType=jpg&imgSize=small&alt=json
	var full_request = "https://www.googleapis.com/customsearch/v1?key=" + key + "&cx=" + id + "&searchType=image" + "&q=" + query;
	console.log(full_request);

	return 1;

}
google_for_cats();
