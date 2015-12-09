'use strict';

//var google = require('googleapis');

window.onload = function()
{
	var Testing = (function()
	{
		return{
			searchCats: function()
			{
				var div1 = document.getElementById("cats");

				div1.src = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
			}
		};
	})();

	Testing.searchCats();

}

