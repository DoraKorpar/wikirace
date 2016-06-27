$(document).ready(function() {
	var socket = io.connect('http://' + document.domain + ':' + location.port);
		socket.on('connect', function(){
			alert("connected");
		});
});

socket.emit('join', {room: room});

document.getElementById('submit')

// grabs inputs from textfields
function words()
{
	var word1 = document.getElementById("word1");
	var word2 = document.getElementById("word2");
	alert("input");
}

// generates custom id for every request
function makeid() {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (var i = 0; i < 10; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	return text;
}