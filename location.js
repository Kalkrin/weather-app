var request = require('request');
var url = 'http://ipinfo.io';

//Promise to return a json object containig information on the users location based on their ip address
module.exports = function() {
	return new Promise(function(resolve, reject) {
		request({
			url: url,
			json: true
		}, function(error, response, body) {
			if(error) {
				reject('Unable to guess location');
			}
			resolve(body);
		});
	});
}

//using callbacks

// module.exports = function() {
// 	request({
// 		url: url,
// 		json: true
// 	}, function(error, response, body) {
// 		if(error) {
// 			callback();
// 		} else {
// 			callback(body);	
// 		}
// 	});
// }