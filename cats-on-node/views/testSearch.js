'use strict';

var client = require( 'google-images' );

var Testing = (function
{
	return{
		searchCats: function()
		{
			client.search( 'Chicken Teriyaki', function (err, images) {
    			console.log(images)
			});

		}
	};
})();

Testing.searchCats();

module.exports = Testing;