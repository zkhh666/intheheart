const express = require('express')
const router = express.Router()
const houcurd = require('../../db/model/houCurd')
const fs = require('fs')
const path = require('path')

var multer = require('multer')
/**
 * @api {get} /hou/login 用户登录
 * @apiName login
 * @apiGroup houtai
 *
 * @apiParam {String}us 用户账号
 * @apiParam {String}ps 用户密码./
 *
 * @apiSuccess {Number} err  状态码
 * @apiSuccess {String} msg msg
 *   @apiSuccess {String} token token
 */
//图片添加
router.post('/add',multer().single('shopTu'),(req,res,next)=>{
    // console.log('穿进来了')
    // console.log(req.body)
    let {id,shopName,shopMs,price,type} = req.body
    let {buffer,originalname} = req.file
       
    console.log(req.file)
    fs.writeFile(path.join(__dirname,`../../WWW/img/${originalname}`),buffer,(err)=>{
        //写入一个文件，到指定目录底下，写成了绝对路径
        // console.log(req.file) 
    })
    houcurd.insertMany({id:id,shopName:shopName,shopMs:shopMs,price:price,imgurl:'http://localhost:3000/img/'+`${originalname}`,type:type})
    .then((data)=>{
      if(data){
          res.send('添加成功了')
      }else{
          res.send('添加失败了')
      }
    })
   
})
//删除操作
// router.post('/del',(req,res)=>{
//     houcurd.deleteMany()
//     houcurd.find()
// })
//修改信息
// router.post('/rename',(req,res)=>{
//     res.send({err:-1,msg:'reg ok'})
// })
//查询所有商品信息
router.post('/findall',(req,res)=>{
    houcurd.find()//查找这个表，返回所有
    .then((data)=>{
         res.send({err:1,msg:'请求ok',data})
    })
    .catch(()=>{
        res.send({err:-1,msg:'请求no ok'})
    })
})
//查询蔬菜商品信息
router.post('/shaixuan',(req,res)=>{
    let {type,str2,price} = req.body
    console.log(type,str2,price)
    //解三个传递的数据
    //蔬菜=》序号=》 从小到大
    if(type === '蔬菜' && str2==='序号' && price==='从小到大'){
        console.log(1)
        houcurd.find({type:'蔬菜'}).sort({'id':-1})
        .then((data)=>{
            res.send({err:1,zhuangtai:'蔬菜,序号,从小到大',data})
        })
    }
    //蔬菜，序号，从大到小
    else if(type === '蔬菜' && str2==='序号' && price==='从大到小')
    {
        console.log(2)
        houcurd.find({type:'蔬菜'}).sort({'id':1})
        .then((data)=>{
            res.send({err:1,zhuangtai:'蔬菜，序号，从大到小',data})
        })
    }
    //蔬菜，价格，从小到大
    else if(type === '蔬菜' && str2==='价格' && price==='从小到大'){
        console.log(3)
        houcurd.find({type:'蔬菜'}).sort({'price':-1})
        .then((data)=>{
            res.send({err:1,zhuangtai:'蔬菜,价格,从小到大',data})
        })
    }
    //'蔬菜,价格,从大到小
    else if(type === '蔬菜' && str2==='价格' && price==='从大到小')
    {
        console.log(4)
        houcurd.find({type:'蔬菜'}).sort({'price':1})
        .then((data)=>{
            res.send({err:1,zhuangtai:'蔬菜,价格,从大到小',data})
        })
    }
    //==========================================================================
   else if(type === '水果' && str2==='序号' && price==='从小到大'){
    console.log(5)
        houcurd.find({type:'水果'}).sort({'id':0} )
        .then((data)=>{
            res.send({err:1,zhuangtai:'水果,序号,从小到大',data})
        })
    }
    //水果，序号，从大到小
    else if(type === '水果' && str2==='序号' && price==='从大到小')
    {
        console.log(6)
        houcurd.find({type:'水果'}).sort({'id':1})
        .then((data)=>{
            res.send({err:1,zhuangtai:'水果，序号，从大到小',data})
        })
    }
    //水果，价格，从小到大
    else if(type === '水果' && str2==='价格' && price==='从小到大'){
        console.log(7)
        houcurd.find({type:'水果'}).sort({'price':-1})
        .then((data)=>{
            res.send({err:1,zhuangtai:'水果,价格,从小到大',data})
        })
    }
    //水果,价格,从大到小
    else if(type === '水果' && str2==='价格' && price==='从大到小')
    {
        console.log(8)
        houcurd.find({type:'水果'}).sort({'price':1})
        .then((data)=>{
            res.send({err:1,zhuangtai:'水果,价格,从大到小',data})
        })
    }
})


//查询这个uid的商品内容
router.post('/detailed',(req,res)=>{
   
 let {uid} = req.body
 houcurd.find({id:uid})
 .then((data)=>{
      res.send(data)
 })
.catch((err)=>{
    
    res.send(err)
})
   
})

module.exports = router
