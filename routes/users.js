var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add', function(req, res, next){
	console.log(req.file);  
	 console.log(req.body);  
	res.send("success..xxx");
});

module.exports = router;
