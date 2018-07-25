var express = require('express');  
//引入multer模块  
//设置上传的目录，  
//这里指定了一个临时目录（上传后的文件均保存到该目录下），  
//真正开发是一般加入path模块后使用path.join(__dirname,'temp');  
var app = express();  
var router = express.Router();
let Redis = require('ioredis');
let redis = new Redis();

let {addWork, getWorks} = require('../help.js')

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
res.send('deploy test, pid = ' + process.pid + 'nrocess title >>' + process.title);
});

router.get('/weixin/event', function(req, res, next){
    console.log('req.echostr >> ', req.query.echostr)
})

router.get('/add', function(req, res, next) {
    redis.set('name', req.query.name || 'libin')
    redis.lpush('queue', req.query.name)
    let works = addWork({
        name: Math.random(),
        age: Math.random()
    })
    let processInfo = 'deploy test, pid = ' + process.pid + 'nrocess title >>' + process.title;
    res.send({works, processInfo})
});

router.get('/get', function(req, res, next) {
    let works = getWorks();
    let name = redis.lpop('queue').then(r => {
        res.send(r)
    })
    // let processInfo = 'deploy test, pid = ' + process.pid + 'nrocess title >>' + process.title;
    // res.send({name, works, processInfo})
});

module.exports = router;
