//Dependencies
var express 		= require('express');
var path = require("path");
var exphbs 			= require('express-handlebars');
var expressValidator = require('express-validator');
var bodyParser 		= require('body-parser');
var mongoose 		= require('mongoose');
var request 		= require('request');
var cheerio 		= require('cheerio');
var logger 			= require('morgan'); // for debugging
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');

var routes = require('./routes/index');
var users = require('./routes/users');
var welcome = require('./routes/welcome');

//Models
var Player 			= require('./models/Player.js');
var Team 		= require('./models/Team.js');

//Express
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));

//Connect when ready to deploy to Heroku
if(process.env.NODE_ENV == 'production'){
  mongoose.connect('mongodb://heroku_2ljtbgvc:4m850455rmes38her313rut664@ds135552.mlab.com:35552/heroku_2ljtbgvc');
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

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

///Must be turned on to push to database
// require("./Controller/NBAstats.js")(app);


// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered

app.get('/welcome', function(rec, res){
  res.render('welcome');
});
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

app.get("/api/players", function(req, res) {

  // We will find all the records
  Player.find({}).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

app.get("/api/roster/:teamInitials", function(req, res) {

  // We will find all the records
  Player.find({Tm: req.params.teamInitials}).exec(function(err, doc) {
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

app.get("/api/team/wPct2017", function(req, res) {

  // We will find all the records
  Team.find({}).sort({wPct2017:-1}).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});


app.get("/api/team/east", function(req, res) {

  // We will find all the records
  Team.find({conference: "East"}).sort({wPct2017:-1}).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});


app.get("/api/team/west", function(req, res) {

  // We will find all the records
  Team.find({conference: "West"}).sort({wPct2017:-1}).exec(function(err, doc) {
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
app.get("/api/team/:teamInitials", function(req, res) {

  // We will find all the records
  Team.find({teamInitials: req.params.teamInitials}).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

app.use('/', routes);
app.use('/users', users);
app.use('/welcome', welcome);

app.get('/users/logout', function(req, res){
  req.logout();
  res.redirect('/users/login');
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

//Listening to the port 3000 or the environment PORT
app.listen(process.env.PORT || 3000, function()  {
	console.log('App running on port 3000');
});