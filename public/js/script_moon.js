//gnb bg
$(document).ready(function(){
    $('.gnb, .gnb>ul').hover(function(){
        $('.gnb>li>ul, .nav_bg').stop().slideDown(1000)
    }, function(){
        $('.gnb>li>ul, .nav_bg').stop().hide()
    })
})




//메인비주얼-slick jqwery
$(document).ready(function(){
    $('.main_slider').slick();
  });




//메인비주얼 슬라이드
// $(document).ready(function(){
//     var slideIndex = 0;
//     var totalSlides = $('.main_slide').length;

//     $('.next').click(function(){
//         slideIndex = (slideIndex + 1) % totalSlides;
//         moveSlide();
//     });

//     $('.prev').click(function(){
//         slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
//         moveSlide();
//     });

//     function moveSlide(){
//         var slideWidth = $('.main_slide').outerWidth();
//         var moveAmount = slideIndex * slideWidth * -1;
//         $('.slide_container').css('transform', 'translateX(' + moveAmount + 'px)');
//     }
// });