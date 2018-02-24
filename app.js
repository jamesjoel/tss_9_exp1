var express = require('express');
var app = express(); // calling a express contructor



app.set('view engine', 'ejs');

app.listen(3000, function(){
	console.log("Server Running");
});

app.get('/', function(req, res){
	// res.send("<h1>hello world</h1>");
	res.sendFile(__dirname+'/pages/home.html');
});
app.get('/about', function(req, res){

	// res.send("<h1>About Page</h1>");
	var info = { name : 'rohit', age : 25};
	// res.sendFile(__dirname+'/pages/about.ejs');
	res.render(__dirname+'/pages/about.ejs', info);
});