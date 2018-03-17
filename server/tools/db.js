/*数据库连接模块*/
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/daowei')

mongoose.connection.on('open',function (err) {
  if (!err){
    console.log('数据库连接成功')
  }
})
