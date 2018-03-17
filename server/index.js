require('./tools/db')

const models = require('./models/models')

var express = require('express');

var app = express()

const {shop , service, item, comment} = models

app.use(express.static("public"))
//获取首页数据
app.get('/getShopList',function (req, res) {
  shop.find({},function (err, data) {
    // 出错
    if(err){
      res.send({status:'error'})
    }else{
      res.send({list: data})
    }
  })
})
/*获取服务页面信息*/
app.get('/getService',function (req, res) {
  service.find({},function (err, data) {
   if(!err){
     res.send({list:data})
   }
 })
})

app.get('/getFuwu', function (req, res) {
  item.findOne({id:'1001'},function (err,data) {
      if(!err){
      res.send({list:data})
    }
  })
})

/*app.get('/getComment',function (req, res) {
  comment.find({},function (err, data) {
    res.send({list:data})
  })
})*/
// 每页显示固定的评论数  分页
app.get('/getComment',function (req, res) {
  var page = req.query.page
  //每页10条 skip（）指定跳过的个数
  comment.find({}).limit(10).skip((page-1)*10).exec(function (err, data) {
    res.send({comments:data})
  })
})
/*comment.find({},function (err,data) {
  if (!err) {
    console.log(data)
  }
})*/
app.listen(3000)
