$(document).ready(function(){
    $(".menu_2dpth > ul").addClass("on"); //2dpth show
    $(".sub_menu_main .menu_list > div").eq(0).find(".menu_cont_wrap").eq(0).addClass("on").find("ul").eq(0).addClass("on"); //menu_cont_wrap show
    
    $(".sub_menu_main .sub_background li a").addClass("on");

    $(".sub_menu_main .menu_list .img_hover li").hover(
        function () {
            $(this).find(".img_wrap").addClass("on");
            $(this).find("img").stop().animate({height:234, left:0, top:-10}, 250);
            //$(this).find("img").stop().animate({width:240, left: -20, top: -40}, 500);
        },
        function () {
            $(this).find(".img_wrap").removeClass("on");
            $(this).find("img").stop().animate({height:214, left:0, top:0}, 250);
            //$(this).find("img").stop().animate({width:200, left: 0, top: 0}, 500);
        }
    ); //이미지 호버 border, scale

    $(".menu_1dpth li").on("click", function () { //1뎁스 클릭
        $(".sub_menu_main .menu_1dpth li a").removeClass("on");
        $(this).find("a").addClass("on"); //폰트 bolder, 언더바        

        $(".menu_2dpth ul").eq($(this).index()).find("li").eq(0).addClass("on"); //2뎁스 첫번째 li에 on

        $(".sub_menu_main .menu_list .menu_cont_wrap").find("ul").removeClass("on");
        $(".sub_menu_main .menu_list .menu_cont_wrap").find("ul").eq(0).addClass("on");
        
    });

    $(".menu_2dpth li").on("click", function () {
        $(".menu_2dpth li").removeClass("on"); //전체 li에서 on remove
        $(this).addClass("on"); //현재 li background-color

        $(".sub_menu_main .menu_list ul").removeClass("on");
        $(".sub_menu_main .menu_list ul").eq($(this).index()).addClass("on");
    });

    
});

