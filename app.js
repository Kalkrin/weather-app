//Setting up yargs to accept input in the console
var argv = require('yargs')
	.option('location', {
		alias: 'l',
		demand: false,
		describe: 'Location to get the weather for',
		type: 'string'
	})
	.help('help')
	.argv;
//setting up variable to act as functions for location.js and weather.js
var weather = require('./weather.js');
var location = require('./location.js');

//checking if the input from the user is a string and isn't empty
//if the location is provided, use that location to get the weather
if (typeof argv.l === 'string' && argv.l.length > 0) {
	console.log('Location was provided');
	//using a promise from weather.js
	weather(argv.l).then(function(currentWeather) {
		console.log(currentWeather);
	}).catch(function(error){
		console.log(error);
	});
} else {
	//if the location is not provided, use the users ip address to get their location
	console.log('No location was not provided, using your IP address to guess your location');
	//using a promise of both weather.js and location.js 
	location().then(function(location) {
		return weather(location.city)
	}).then(function(currentWeather) {
		console.log(currentWeather);
	}).catch(function(error) {
		console.log(error);
	});
}