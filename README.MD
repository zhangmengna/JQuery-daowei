## 3.14 首页静态网页
   头部
   轮播的静态网页已完成，动态效果还没有做
   
## 3.15 服务商和云家政 页面  二级菜单的显示
     问题及解决：
     *二级菜单：在以及菜单内部出现定位问题
     只在一级菜单ul上相对定位，此时二级菜单是相对一级菜单容器进行定位
     *轮播时用插件swiper出现不能自动轮播：将autoplay配置在元素外边
   ```
   var swiper = new Swiper('.swiper-container',{
    // loop: true,
    pagination: {
      el: '.swiper-pagination',
      //autoplay:true, //自动轮播 3000默认 有时候会失效
      /*autoplay:{
        delay: 2500,
        disableOnInteraction: false,
      },*/
      clickable:true, // 点击切换
      effect:"fade", // 切换效果
    },
    autoplay:true, // 配置在外边
    loop:true,
  })
  ```

## 3.16 首页页面轮播效果，搭建后台数据
    问题： 搭建数据库，不太熟悉
    在请求数据是返回空数组，可以在模板后面将数据集配置上

```
var itemSchema = new Schema({
 
},{
  collection: 'fuwuitems'
})
```

## 3.17 在server中是通过后台数据动态获取页面数据
    问题及解决:在上下翻页中点击两次才出现nopage效果，解决在点击后再判断一下
    遗留问题：评论列表上的评价星星数量还没有解决



## 说明：在外部的是静态页面相关的数据，在server中是通过后台数据库动态获取的数据