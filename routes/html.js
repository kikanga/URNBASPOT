var express = require("express");
var router = express.Router();

var request = require('request');
var fs = require("fs");
var Player = require('./../models/Player.js');
// var _ = require('underscore');

router.get('/players', function(req, res) {
	
	Player.find({}, function(err, doc)  {
		//Displays error if any
		if (err) {
			console.log(err);
		}
		else {

			res.json(doc)
		};
	});
});

module.exports = router;