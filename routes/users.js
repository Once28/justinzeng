var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/resume', function(req, res, next) {
  res.sendFile('public\resume\Justin Zeng\'s CV.pdf');
});
module.exports = router;
