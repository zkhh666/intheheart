//和用户表相关的schem 对象和数据模型
const mongoose = require('mongoose')


//创建一个schema对象 =》当成表头
//如果要创建一个user表， 
var qiantaiuser = mongoose.Schema({
    us:{type:String,require:true},//这样必须是字符串格式，类型
    //age:{type:Number,default:0} ,选填，有数据就按数据来，没有就默认0
    ps:String
  });
//把schema对象变成数据模型（和数据库里面的集合关联），就可以去修改了（增删改查）
var User = mongoose.model('users', qiantaiuser);//也可以不用是s，需要第三个参数

module.exports = User   //把数据模型做个抛出






// 查找,会差复数的表users，所以需要把表改成复数，关联那里
// User.find()
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log('出错了',err)
// })
// //插入，会插入到users表里面，所以需要把表改成复数，关联那里
// User.insertMany({us:'wanger',ps:123456})
// //范围查找
// User.find({age:{$age:17}})
// //删除：需要改成deleteOne，deleteMany
// User.remove({age:{$gte:17}})
// .then((data)=>{
// })
// .catch((err)=>{
// })
// //更新，需要更改成updataOne，updateMany
// User.update({age:16},{age:160})