var request = require('request');

//Using a promise to take a location parameter (city) and making an api call to get weather information based on the location provided
module.exports = function(location) {
	return new Promise(function (resolve, reject) {
		encodedLocation = encodeURIComponent(location);
		var url = 'http://api.openweathermap.org/data/2.5/weather?q='+encodedLocation+'&units=metric&APPID=297420b84d18f368e8127008e15282c0';
		if(!location) {
			return reject('No location provided');
		}
		request({
			url: url, 
			json: true
		}, function(error, response, body) {
			if(error) {
				reject('Unable to fetch weather.');
			}
			resolve('It is ' + body.main.temp + ' degrees celcius in ' + body.name + ' right now.');
		});
	});
}