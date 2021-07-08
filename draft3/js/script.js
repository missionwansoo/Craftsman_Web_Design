$(document).ready(function(){
    
    // 네비게이션
    
    $("header nav ul.gnb>li").hover(function(){
        $(this).find("ul.sub").stop().slideDown();
    },function(){
        $(this).find("ul.sub").stop().slideUp();
    });
    
    
    // 슬라이드
    
    $(".slide_gnb>li").eq(0).siblings().hide();
    
    var slideI=0;
    
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
//        console.log(slideI);
        $(".slide_gnb>li").eq(slideI).siblings().fadeOut(500);
        $(".slide_gnb>li").eq(slideI).fadeIn(500);
        
    },3000);
    
    // 탭메뉴
    
    $(".notice_tit").click(function(){
        $(this).addClass("on");
        $(".notice").addClass("on");
        $(".gal_tit").removeClass("on");
        $(".gal").removeClass("on");
    });
    
    $(".gal_tit").click(function(){
        $(this).addClass("on");
        $(".gal").addClass("on");
        $(".notice_tit").removeClass("on");
        $(".notice").removeClass("on");
    });
    
    //팝업창
    
    $(".notice li").click(function(){
        $(".modal").fadeIn();
    });
    $(".modal .modal_popup button").click(function(){
        $(".modal").fadeOut();
    });
    
    
    
    
});//ready end






