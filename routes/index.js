var express = require('express');
var router = express.Router();

var en_info = require('../langs/en');

/* GET home page. */
router.get('/', function(req, res) {
  console.log(en_info)
  res.render('index', { title: en_info.title , body: 'This is a demo' });
});

/* GET signin page. */
router.get('/signin', function(req, res) {
	res.render('signin', { title: 'Coffeer-Login' });
});

module.exports = router;
