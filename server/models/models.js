/*数据模板*/
var mongoose = require('mongoose')

var Schema = mongoose.Schema

var shopSchema = new Schema({
  serviceIndex:{
    type:String,
    unique:true,
  },
  serviceType:{
    type: Array,
    unique:true,
  },
  shopList:{
    type:Array,
    unique:true
  },
})

var serSchema = new Schema({
  id:{
    type: String,
    unique: true
  },
  title:{
    type: String,
  },
  orderCount:{
    type: Number,
  },
  positiveRate:{
    type: String,
  },
  imgUrl:{
    type: String,
  },
})

var itemSchema = new Schema({
  id:{ type: String, unquie: true},
  title:{ type: String},
  name:{ type: String},
  desc:{ type: String},
  price:{ type: Number},
  oldPrice:{ type: Number},
  orderCount:{ type: Number},
  soldCount:{ type: Number},
  commentCount:{ type: Number},
  accept:{ type: String},
  praise:{ type: String},
  imgUrl:{ type: String},
  company:{ type: String},
  profile:{ type: String}
},{
  collection: 'fuwuitems'
})

var commentSchema = new Schema({
  iconUrl:{type: String},
  area:{type: String},
  city:{type: String},
  comment:{type: String},
  createtime:{type: String},
  nick:{type: String},
  star:{type: Number}
},{
  collection:'comments'
})

var shop = mongoose.model('shop', shopSchema)
var service = mongoose.model('service',serSchema)
var item = mongoose.model('item', itemSchema)
var comment = mongoose.model('comment', commentSchema)

module.exports = {shop, service, item, comment}