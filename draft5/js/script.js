$(document).ready(function(){
    
    //네비게이션
    
    $("header nav ul.gnb>li").hover(function(){
        $("header nav ul.gnb>li>ul.sub").stop().slideDown();
    },function(){
        $("header nav ul.gnb>li>ul.sub").stop().slideUp();
    });
    
    
    //슬라이드
    
    $(".slide ul li").eq(0).siblings().css({"left":"-1200px"});
    
    var slideI=0;
    
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        
        $(".slide ul li").eq(slideI).siblings().animate({"left":"-1200px"},500);
        $(".slide ul li").eq(slideI).animate({"left":"0"},500);
                
        
    },3000);
    
    //공지사항
    
    $(".gal h2").click(function(){
        $(this).addClass("on");
        $(".notice h2").removeClass("on");
        $(this).next("ul").addClass("on");
        $(".notice h2").next("ul").removeClass("on");
    });
    
    $(".notice h2").click(function(){
        $(this).addClass("on");
        $(".gal h2").removeClass("on");
        $(this).next("ul").addClass("on");
        $(".gal h2").next("ul").removeClass("on");
    });
    
    //팝업창
    
    $(".notice ul li").eq(0).click(function(){
        $(".modal").stop().fadeIn(500);
    });
    $(".modal .modal_popup button").click(function(){
        $(".modal").stop().fadeOut(500);
    });
    
    
    
}); //ready end










