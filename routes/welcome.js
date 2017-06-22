var express = require('express');
var router = express.Router();

router.get('/welcome', function(rec, res){
	res.render('welcome');
});

module.exports = router;