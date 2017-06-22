//Dependencies
var express 		= require('express');
// var exphbs 			= require('express-handlebars');
var bodyParser 		= require('body-parser');
var mongoose 		= require('mongoose');
var request 		= require('request');
var cheerio 		= require('cheerio');
var logger 			= require('morgan'); // for debugging

//Models
var Player 			= require('./models/Player.js');
var Team 		= require('./models/Team.js');

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

// var router = require('./routes/html.js');

// app.use('/', router);

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


// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered

app.get("/api/players", function(req, res) {

  // We will find all the records
  Player.find({name: "Russell Westbrook"}).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});




app.get("/api/roster", function(req, res) {

  // We will find all the records
  Player.find({Tm: "CLE"}).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

app.get("/api/team", function(req, res) {

  // We will find all the records
  Team.find({}).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

//TO GET PLAYER INFO FOR THEIR PAGE
app.get("/api/players/:PlayerID", function(req, res) {

  // We will find all the records
  Player.find({PlayerID: req.params.PlayerID}).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});


// TO GET TEAM ROSTER
app.get("api/team/:Tm", function(req, res) {

  // We will find all the records
  Player.find({Tm: req.params.Tm}).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});



//Listening to the port 3000 or the environment PORT
app.listen(process.env.PORT || 3000, function()  {
	console.log('App running on port 3000');
});
