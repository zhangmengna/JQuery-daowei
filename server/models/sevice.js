/*service模块*/

var mongoose = require('mongoose')

var Schema = mongoose.Schema

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
},{
  collection:'services' // 如果空数组配置集合名
})

module.exports = mongoose.model('service',serSchema)