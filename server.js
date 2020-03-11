const express = require('express')
const app = express()
const path = require('path')
const db = require('./db/connect')//引入文件时候，直接把文件执行了，链接成功了数据库
const websockeo = require('./router/websockeo')

const https = require('https')
const fs = require('fs')


//解析post表单
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded())  //=》只解析表单格式的post
app.use(bodyParser.json())	 		//=》解析json的post

//======================https:
var options = {
    key:fs.readFileSync('./nginx/3305195_www.intheheart.cn.key'),
    cert:fs.readFileSync('./nginx/3305195_www.intheheart.cn.pem')
}


// 跨域
// app.all('*', (req, res, next)=>{
//     res.setHeader('Access-Control-Allow-Origin','*');
//     next();
// })

//使用路由
const Haier = require('./router/proscenium/haier')
const qianAdmin = require('./router/proscenium/qianadmin')
const houAdmin = require('./router/background/houadmin')
app.use('/haier',Haier) 
app.use('/qian',qianAdmin) 
app.use('/hou',houAdmin)


https.createServer(options,app).listen(443)

//配置WWW目录
app.use('/',express.static(path.join(__dirname,'./WWW')))
//监听8080
app.listen(3000,()=>{ 
    console.log('服务器启动')
})