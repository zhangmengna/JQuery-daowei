/**
 * Created by z on 2018/3/16.
 */
require('./tools/db')

var shop = require('./models/shops')

shop.find({},function (err,data) {
  if(!err){
    console.log(data)
  }
})