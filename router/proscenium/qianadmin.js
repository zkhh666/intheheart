const express = require('express')
const router = express.Router()
const sendemail = require('../../util/email')
//引入数据模型
const qianUSer = require('../../db/model/userModel')
// router.get('/reg',(req,res)=>{
//     let data = req.query
//     res.send()
// })
let codes = []

//注册功能
router.post('/reg',(req,res,next)=>{
//获取用户信息
    let data = req.body
    let {username,password,em,yz} = data
    console.log(data)
//注册先做查找功能
   qianUSer.findOne({us:username})
   .then((data)=>{
       if(!data){
           next()
       }else{
           res.send({err:-1,msg:'用户名重复'})
       }
//        if(data){
//            res.send({err:-1,msg:'用户名重复'})
//        }else{
// //查找到了，上面的用户重复，如果查找不到，添加用户
//            qianUSer.insertMany({us:username,ps:password})
//              .then((data)=>{
//                  if(data){
//                     res.send({err:0,msg:'注册成功'})
//                  }
//                 else{
//                    res.send({err:-1,msg:'注册失败'})
//                  }
//                  })
//              .catch((err)=>{
//                  res.send({err:-2,msg:'服务器内部错误'})
//                   })
//          }
         })
    .catch((err)=>{
        res.send({err:-2,msg:'内部错误'})
          })
 
},(req,res)=>{
  let {username,password,em,yz} = req.body
  if(codes[0].code==yz&&codes[0].email==em){
    qianUSer.insertMany({us:username,ps:password})
    .then((data)=>{
        if(data){
            res.send({err:0,msg:'注册成功'})
                 }
        else{
            res.send({err:-1,msg:'注册失败'})
                 }
             })
     .catch((err)=>{
            res.send({err:-2,msg:'服务器内部错误'})
             })
  }else{
    res.send({err:-1,msg:'验证码错误'})
  }
})
//前台登录功能
router.post('/login',(req,res)=>{
//获取账户密码 
    let data = req.body
    let {username,password}= data
    console.log({username,password})
 //登录查询
    qianUSer.find({us:username,ps:password})
    .then((data)=>{
     if(data){
        res.send({err:0,msg:'login ok'})
     }else{
        res.send({err:0,msg:'登录失败'})
     } 
    })
    .catch((err)=>{
      res.send({err:-1,msg:'内部错误'})
    })
    
})
//发送验证码
//rides缓存库，在验证码专门库，节省直接写在缓存中
router.post('/email',(req,res)=>{
    let data = req.body
    //    console.log(data)
    let {email} = data
    let code = parseInt(Math.random()*10000)//随机验证码
    codes.push({code,email})


    sendemail.sendMail(email,code,(state)=>{
        console.log('邮件发送状态',state)
        if(state===1){
            res.send({err:0,msg:'发送成功'})
        }else{
            res.send({err:-1,msg:'发送失败'})
        }
    })

})




module.exports = router 
