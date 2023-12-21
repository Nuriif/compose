$(document).ready(function () {
  $(".gnb > li:not(#franchise_li), .gnb_bg").hover(
    function () {
      $(".gnb ul, .gnb_bg").stop().slideDown(800);
    },
    function () {
      $(".gnb ul, .gnb_bg").stop().slideUp(10);
    }
  );
  $("#franchise_li, #franchise_a").off();
});
