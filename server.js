//Dependencies
var express 		= require('express');
var exphbs 			= require('express-handlebars');
var bodyParser 	= require('body-parser');
var mongoose 		= require('mongoose');
var request 		= require('request');
var cheerio 		= require('cheerio');
var logger = require('morgan'); // for debugging

//Models
var Player 		= require('./models/Player.js');
// var Team 		= require('./models/Team.js');

//Express
var app = express();

app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(express.static('public'));
//Connect when ready to deploy to Heroku
if(process.env.NODE_ENV == 'production'){
  //mongoose.connect('mongodb://heroku_656f71wk:temjb96md93bt81mjhepgbjheo@ds161901.mlab.com:61901/heroku_656f71wk');
}
else{
  mongoose.connect('mongodb://localhost/NBA');
}

var router = require('./routes/html.js');

app.use('/', router);

var db = mongoose.connection;
db.on('error', function (err) {
	console.log('Mongoose Error: ', err);
});

//Setting handlebars as view engine
// app.engine('handlebars', exphbs({
// 	defaultLayout: 'main'
// }));
// app.set('view engine', 'handlebars');

///Must be turned on to push to database
// require("./Controller/NBAstats.js")(app);

// require("./Controller/BulkGrabbingStats.js")(app);
require("./Controller/nbaTest.js")(app);

//Listening to the port 3000 or the environment PORT
app.listen(process.env.PORT || 3000, function()  {
	console.log('App running on port 3000');
});
