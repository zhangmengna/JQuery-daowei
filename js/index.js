$(function () {
  // swiper
  var swiper = new Swiper('.swiper-container',{
    pagination: {
      el: '.swiper-pagination',
      //autoplay:true, //自动轮播 3000默认
      /*autoplay:{
        delay: 2500,
        disableOnInteraction: false,
      },
      clickable:true, // 点击切换
      effect:"fade", // 切换效果*/
    },
    loop: true,
    autoplay:true
  })
  showMenu ()
  // 鼠标切换二级菜单
  function showMenu () {
    $('.menu-1-item').hover(function () {
      $(this).find('.right-icon').hide()
      $(this).find('.left').show()
      $(this).children('ul').css('display','block')
    },function () {
      $(this).find('.right-icon').css('display','block')
      $(this).find('.left').css('display','none')
      $(this).children('ul').css('display','none')
    })
  }

  // 头部动画
 $(document).scroll(function(){
   if($(this).scrollTop()>=71){
     console.log($(this).scrollTop())
     $('#header').addClass('ani')
   }else {
     $('#header').removeClass('ani')
   }
 })


})
