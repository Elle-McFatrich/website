var apiUrl = 'http://api.weatherapi.com/v1/current.json?key=6aab231f8a624622a66233204233001&q=29445&aqi=no';
fetch(apiUrl).then(response => {
	return response.json();
}).then(data => {
	// Work with JSON data here
	var concat = "City: " + data.location.name + "\n"
	concat = concat + "State: " + data.location.region + "\n"
	document.getElementById('test').innerText = concat
	document.body.style.backgroundColor = "#AA0000";
	console.log(data);
 	console.log(data.location.name)
	}).catch(err => {
	// Do something for an error here
});
