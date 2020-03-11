//链接前端数据库
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/qiantai',{ uuseNewUrlParser: true});
var db = mongoose.connection;
db.on('error', (err)=>{
    console.log('前台数据库链接失败')
});
db.once('open', function() {
console.log('前台数据库链接成功')
});
//链接后端数据库
mongoose.connect('mongodb://localhost/houtai',{ uuseNewUrlParser: true});
var db = mongoose.connection;
db.on('error', (err)=>{
    console.log('后台数据库链接失败')
});
db.once('open', function() {
console.log('后台数据库链接成功')
});

//项目，haier的数据库
mongoose.connect('mongodb://localhost/haier',{ uuseNewUrlParser: true});
var db = mongoose.connection;
db.on('error', (err)=>{
    console.log('海尔数据库接入失败')
});
db.once('open', function() {
console.log('海尔数据库接入成功')
});









