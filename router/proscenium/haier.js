const express = require('express')
const router = express.Router()
//引入数据模型
const haier = require('../../db/model/haier.js')
//首页
router.post('/first',(req,res,next)=>{
    haier.find()
    .then((data)=>{
       res.send({err:1,msg:'登录ok',data})
    })
    .catch((err)=>{
        res.send({err:-1,msg:'登录失败',err})
    })
})
//首页条渲染
router.post('/zhanshi',(req,res,next)=>{
    console.log(req.body)
    if(req.body.id ==="5e1d6e6eab673c3548f9e662"){
         res.send([
    {img:'http://10.9.23.246:3000/img/1.jpg',name:'正月初一',bofang:'8881'},
    {img:'http://10.9.23.246:3000/img/1.jpg',name:'正月初一',bofang:'8882'},
    {img:'http://10.9.23.246:3000/img/1.jpg',name:'正月初一',bofang:'8883'},
    {img:'http://10.9.23.246:3000/img/1.jpg',name:'正月初一',bofang:'8884'},
    {img:'http://10.9.23.246:3000/img/1.jpg',name:'正月初一',bofang:'8885'},
    {img:'http://10.9.23.246:3000/img/1.jpg',name:'正月初一',bofang:'8886'},
    {img:'http://10.9.23.246:3000/img/1.jpg',name:'正月初一',bofang:'8887'},
    {img:'http://10.9.23.246:3000/img/1.jpg',name:'正月初一',bofang:'8888'},
    {img:'http://10.9.23.246:3000/img/1.jpg',name:'正月初一',bofang:'8889'},
    {img:'http://10.9.23.246:3000/img/1.jpg',name:'正月初一',bofang:'88810'},
])
    }
    else if(req.body.id ==="5e1d6e6eab673c3548f9e663"){
        res.send([
            {img:'http://10.9.23.246:3000/img/2.jpg',name:'正月初二',bofang:'6661'},
            {img:'http://10.9.23.246:3000/img/2.jpg',name:'正月初二',bofang:'6662'},
            {img:'http://10.9.23.246:3000/img/2.jpg',name:'正月初二',bofang:'6663'},
            {img:'http://10.9.23.246:3000/img/2.jpg',name:'正月初二',bofang:'6664'},
            {img:'http://10.9.23.246:3000/img/2.jpg',name:'正月初二',bofang:'6665'},
            {img:'http://10.9.23.246:3000/img/2.jpg',name:'正月初二',bofang:'6666'},
            {img:'http://10.9.23.246:3000/img/2.jpg',name:'正月初二',bofang:'6667'},
            {img:'http://10.9.23.246:3000/img/2.jpg',name:'正月初二',bofang:'6668'},
            {img:'http://10.9.23.246:3000/img/2.jpg',name:'正月初二',bofang:'6669'},
            {img:'http://10.9.23.246:3000/img/2.jpg',name:'正月初二',bofang:'66610'},
            {img:'http://10.9.23.246:3000/img/2.jpg',name:'正月初二',bofang:'66611'},
        
    ])
    }
    else if(req.body.id ==="5e1d6e6eab673c3548f9e664"){
        res.send([
        {img:'http://10.9.23.246:3000/img/3.jpg',name:'正月初三',bofang:'8888881'},
        {img:'http://10.9.23.246:3000/img/3.jpg',name:'正月初三',bofang:'8888882'},
        {img:'http://10.9.23.246:3000/img/3.jpg',name:'正月初三',bofang:'8888883'},
        {img:'http://10.9.23.246:3000/img/3.jpg',name:'正月初三',bofang:'8888884'},
        {img:'http://10.9.23.246:3000/img/3.jpg',name:'正月初三',bofang:'8888885'},
        {img:'http://10.9.23.246:3000/img/3.jpg',name:'正月初三',bofang:'8888886'},
        {img:'http://10.9.23.246:3000/img/3.jpg',name:'正月初三',bofang:'8888887'},
        {img:'http://10.9.23.246:3000/img/3.jpg',name:'正月初三',bofang:'8888888'},
        {img:'http://10.9.23.246:3000/img/3.jpg',name:'正月初三',bofang:'8888889'},
        {img:'http://10.9.23.246:3000/img/3.jpg',name:'正月初三',bofang:'88888810'},
    
    ])
    }
    else if(req.body.id ==="5e1d6e6eab673c3548f9e665"){
        res.send([
        {img:'http://10.9.23.246:3000/img/4.jpg',name:'正月初四',bofang:'666666661'},
        {img:'http://10.9.23.246:3000/img/4.jpg',name:'正月初四',bofang:'666666662'},
        {img:'http://10.9.23.246:3000/img/4.jpg',name:'正月初四',bofang:'666666663'},
        {img:'http://10.9.23.246:3000/img/4.jpg',name:'正月初四',bofang:'666666664'},
        {img:'http://10.9.23.246:3000/img/4.jpg',name:'正月初四',bofang:'666666665'},
        {img:'http://10.9.23.246:3000/img/4.jpg',name:'正月初四',bofang:'666666666'},
        {img:'http://10.9.23.246:3000/img/4.jpg',name:'正月初四',bofang:'666666667'},
        {img:'http://10.9.23.246:3000/img/4.jpg',name:'正月初四',bofang:'666666668'},
        {img:'http://10.9.23.246:3000/img/4.jpg',name:'正月初四',bofang:'666666669'},
        {img:'http://10.9.23.246:3000/img/4.jpg',name:'正月初四',bofang:'6666666610'},
        ])
    }
   
})
module.exports = router 