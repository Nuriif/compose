//gnb bg
$(document).ready(function () {
  $(".gnb, .gnb_bg").hover(
    function () {
      $(".gnb ul, .gnb_bg").stop().slideDown(800);
    },
    function () {
      $(".gnb ul, .gnb_bg").stop().slideUp(10);
    }
  );
});
