var express = require('express');  
//引入multer模块  
var multer = require ('multer');  
//设置上传的目录，  
//这里指定了一个临时目录（上传后的文件均保存到该目录下），  
//真正开发是一般加入path模块后使用path.join(__dirname,'temp');  
var upload = multer({ dest:  "/temp" });  
var app = express();  
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
res.send('deploy test');
});

router.post('/add', upload.single('avatar'), function(req, res, next){
	console.log(req.file);  
	 console.log(req.body);  
	res.send("success..");
});

module.exports = router;
