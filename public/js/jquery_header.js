$(document).ready(function() {
  function desktopMenu() {
    if ($(window).width() >= 768) {
      $(".gnb > li:not(#franchise_li), .gnb_bg").hover(
        function() {
          $(".gnb ul, .gnb_bg").stop().slideDown(350);
        },
        function() {
          $(".gnb ul, .gnb_bg").stop().slideUp(10);
        }
      );
    }
  }

  function mobileMenu() {
    if ($(window).width() <= 767) {
      $('.gnb h3').click(function() {
        $('.gnb h3').next().not($(this).next()).slideUp(200);
        $(this).next().slideToggle(200);
      });
    }
  }

  // 초기 호출
  desktopMenu();
  mobileMenu();

  // 창 크기 변경 감지
  $(window).on('resize', function() {
    // 이전 이벤트 제거
    $(".gnb > li:not(#franchise_li), .gnb_bg").off('mouseenter mouseleave');
    $('.gnb h3').off('click');

    // 함수 호출
    desktopMenu();
    mobileMenu();
  });
});