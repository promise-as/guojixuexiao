'use strict';

$(function () {
  // theaMsForm($('.sign-in'), function ($data) {
  //   if ($data.flag == 'ok') {
  //     $(".popup").css("display", "none");
  //   } else if ($data.flag == 'no') {}
  // });

  /* tab 切换 */
  function tabSwitch(ele, content) {
    $(ele).each(function (index) {
      var that = this;
      $(that).click(function () {
        $(that).addClass('active').siblings().removeClass('active');
        $($(content)[index]).addClass('active').siblings().removeClass('active');
      });
    });
  }

  // 学校大全
  tabSwitch($('.all-school .head-item'), $('.all-school .tab-cont'));

  /* 重置select */
  // currentOption: 当前选项, showOptions: 模拟的options, originalSelect: 原本的select
  function optimizeSelect(currentOption, showOptions, originalSelect) {
    currentOption.click(function () {
      showOptions.css("display", "block");
      showOptions.children("li").each(function () {
        var liEle = this;
        // 点击默认显示的option标签，就显示模拟的options
        $(liEle).click(function () {
          // 默认显示的option标签
          // 取模拟的select的li的rel的值赋值给option标签的value
          originalSelect.val($(this).attr("rel"));
          showOptions.css("display", "none");
          // 把从option标签的html值赋值给默认显示的option
          currentOption.val($(liEle).text());
          $('.sel-grade').val($(liEle).text());
        });
      });
    });
  }
  // 类别
  optimizeSelect($(".current-type"), $(".grade-options"), $(".grade-select"));

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

  if ($(".popup").size() > 0) {}
  // popupHandle('.popup', '.popup .close', 15000, 30000, 2);


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