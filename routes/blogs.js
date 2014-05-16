var express = require('express');
var router = express.Router();

/* GET blogs listing. */
router.get('/', function(req, res) {
  res.render('./blogs/list.html', { title: 'Blogs-Share your view in Coffeer' });
});

router.get('/new', function(req, res) {
  res.render('./blogs/edit.html', { title: 'Blogs-Share your view in Coffeer' });
});

module.exports = router;