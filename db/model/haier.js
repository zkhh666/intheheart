const mongoose = require('mongoose')
var haier = mongoose.Schema({
    id:String,
    shopName:String,
    shopMs:String,
    price:String,
    imgurl:String,
    type:String,
    
})
var haiEr = mongoose.model('haier',haier)


module.exports =haiEr