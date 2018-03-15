$(function () {
  showMenu ()
  // 鼠标切换二级菜单
  function showMenu () {
    $('.menu-1-item').hover(function () {
      $(this).children('ul').css('display','block')
    },function () {
      $(this).children('ul').css('display','none')
    })

  }
})
