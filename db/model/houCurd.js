const mongoose = require('mongoose')
var houcurd = mongoose.Schema({
    id:String,
    shopName:String,
    shopMs:String,
    price:String,
    imgurl:String,
    type:String,
    
})
var houCurd = mongoose.model('houtaicurd',houcurd)


module.exports =houCurd