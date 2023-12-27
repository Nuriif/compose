$(document).ready(function () {
  if ($(window).width() >= 768) {
  $(".gnb > li:not(#franchise_li), .gnb_bg").hover(
    function () {
      $(".gnb ul, .gnb_bg").stop().slideDown(350);
    },
    function () {
      $(".gnb ul, .gnb_bg").stop().slideUp(10);
    }
  );
  }
  $("#franchise_li, #franchise_a").off();

  if ($(window).width() <= 767) {
    $('.gnb h3').click(function () {

//alert("hello!!")
$('.gnb h3').next().not($(this).next()).slideUp(200);
$(this).next().slideToggle(200);
})

}
});



// $(document).ready(function () {
//   if ($(window).width() <= 1064) {
//     $(".gnb > li:not(#franchise_li), .gnb_bg").hover(
//       function () {
//         $(".gnb ul, .gnb_bg").stop().slideDown(800);
//       },
//       function () {
//         $(".gnb ul, .gnb_bg").stop().slideUp(10);
//       }
//     );
//     $("#franchise_li, #franchise_a").off();
//   }
// });

// $(document).ready(function () {
//   if ($(window).width() <= 767) {
//     $('.gnb h3').click(function () {

//       alert("hello!!")
//       $('.gnb h3').next().not($(this).next()).slideUp(200);
//       $(this).next().slideToggle(200);
//     })





//   }



// });

