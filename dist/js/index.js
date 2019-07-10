'use strict';

$(function () {
  theaMsForm($('.sign-in'), function ($data) {
    if ($data.flag == 'ok') {
      $(".popup").css("display", "none");
    } else if ($data.flag == 'no') {}
  });

  /* tab 切换 */
  function tabSwitch(ele, content) {
    $(ele).each(function (index) {
      var that = this;
      $(that).mouseenter(function () {
        $(that).addClass('active').siblings().removeClass('active');
        $($(content)[index]).addClass('active').siblings().removeClass('active');
      });
    });
  }

  // 学校大全
  tabSwitch($('.all-school .head-item'), $('.all-school .tab-cont'));

  // ele: 目标元素, c: 关闭按钮, f: 初始显示的时间, a: 第二次显示的时间, n: 一共显示多少次,
  function popupHandle(ele, c, f, a, n) {
    var $par = $(ele);
    var $num = 1;
    popupTc(f);
    $(c).click(function () {
      $par.hide();
      if ($num < n) {
        popupTc(a);
      }
      $num++;
    });
    function popupTc(d) {
      setTimeout(function () {
        $par.fadeIn(300);
      }, d);
    }
  }

  if ($(".popup").size() > 0) {
    popupHandle('.popup', '.popup .close', 15000, 30000, 2);
  }

  //  弹窗的 预约的项目
  $('.project .project-item').each(function (index) {
    var proThis = this;
    $(proThis).click(function () {
      $(proThis).addClass('active').siblings().removeClass('active');
      $('.appoint-project').val($($(proThis).find('span')[0]).text());
    });
  });

  $('.visit-schools').click(function () {
    $('.popup').css('display', 'block');
  });
});