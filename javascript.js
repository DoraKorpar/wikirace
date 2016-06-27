$(document).ready(function() {
	var socket = io.connect('http://localhost:8000');
		//'http://' + document.domain + ':' + location.port);
		socket.on('connect', function(){
			console.log("connected");
		});
});

// socket.emit('join', {room: room});

// generates custom id for every request
function makeid() {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (var i = 0; i < 10; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	return text;
}

// generating variables for json passed to backend
var submit_button = documentgetElementById("submit");
var word1 = document.getElementById("word1");
var word2 = document.getElementById("word2");
var gen_id = makeid();

var data = {
	"word_1": word1,
	"word_2": word2,
	"id": gen_id
}

// emits json to backend
submit_button.addEventListeneer("click", function(event) {
	socket.emit(data)
});

socket.on('loaded', function() {
	document.getElementById("loading") = "Generating connections"
});

socket.on('done', function() {

});


