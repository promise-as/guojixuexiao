'use strict';

/* dom 加载完成 */
$(function () {
  /* 解决 banner 高度塌陷 */
  $('.banner-bg').load(function () {
    // 等图片加载完成
    $('.banner').height($(this).height() - 38);
  });

  // 监听滚动
  /*$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var scrollHeight = $(document).height();
    var windowHeight = $(this).height();
    if (scrollTop + windowHeight == scrollHeight) {
      // alert("已经到最底部了！");
      // 通过stop() 方法为被选元素停止当前正在运行的动画
      $(".kit .footer").stop(true, true).slideDown();
    } else {
      $(".kit .footer").stop(true, true).slideUp();
    }
  });*/
});