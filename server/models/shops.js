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

/*var serSchema = new Schema({
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
})*/

var shop = mongoose.model('shop', shopSchema)
/*var service = mongoose.model('service',serSchema)*/
module.exports = shop