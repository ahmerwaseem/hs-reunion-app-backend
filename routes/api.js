var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    "get" : "api/",
        "res" : `${req.body}`,
  });
});


router.get('/user/', function(req,res,next){
  res.json({
    "post": " api/user",
    "res" : "user",
  })
});


router.post('/user/update', function(req,res,next){
  res.json({
    "post": " api/user",
    "res" : "user",
  })
});

router.post('/user/create', function(req,res,next){
  res.json({
    "post": " api/user",
    "res" : "user",
  })
});

router.post('/', function(req,res,next){
  res.json({
    "post": " api/user",
    "res" : "user",
  })
});

module.exports = router;
