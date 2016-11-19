# weather-app
Node.js script to get the temperature for a designated location or if no location is provided, it attempts to get the users location via their ip address

To run this program you have to have node.js installed. 

Enter the terminal for your machine, change the directory to weather-app and enter "node app.js".

How to use the app
<pre>
<b>Deffining A Location</b>
node app.js -l "Halifax"

<b>Example output</b>
Location was provided
It is 6 degrees celcius in Halifax right now.

<b>Using The IP Address</b>
node app.js 

<b>Example Output</b>
No location was not provided, using your IP address to guess your location
It is 12.61 degrees celcius in Brampton right now.
</pre>
