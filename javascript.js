$(document).ready(function() {
	var socket = io.connect('http://localhost:8000');
		//'http://' + document.domain + ':' + location.port);
		socket.on('connect', function(){
			console.log("connected");
		});
});

socket.emit('join', {room: room});

// grabs inputs from textfields
function words()
{
	var word1 = document.getElementById("word1");
	var word2 = document.getElementById("word2");
	console.log("input");
}

// generates custom id for every request
function makeid() {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (var i = 0; i < 10; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	return text;
}

function 

var gen_id = makeid();
var json = {
	"word1": word1,
	"word2": word2,
	"id": gen_id
}