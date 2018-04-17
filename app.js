var express = require('express');
var app = express();

var tweets = [
	{
		text: 'CSS are just rules : read in waterfall style',
		time: new Date().getTime()
	},
	{
		text: 'Em : is the measurement of one ‘m’ (width of the small m) : it’s a relative unit : can be used to define image dimensions as it will increase or decrease relative to the text on resizing the screen / window',
		time: new Date().getTime()
	}
];

app.use(express.static(__dirname + '/public'));

app.get('/tweets', function(req, res) {
	res.type('json');
	res.end(JSON.stringify({tweets: tweets}))
})

var server = app.listen(8080);