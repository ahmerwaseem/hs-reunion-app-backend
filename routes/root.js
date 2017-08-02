var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.json("Check your api call");
});

module.exports = router;
