$(document).ready(function(){
    
    //네비게이션
    
    $("header nav ul.gnb>li").hover(function(){
        $(this).find("ul.sub").stop().slideDown();
    },function(){
        $(this).find("ul.sub").stop().slideUp();
    });
    
    //슬라이드
    
    $(".contents ul.slide li").eq(0).siblings().hide();
    
    var slideI=0;
    
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        
        //console.log(slideI);
        
        $(".contents ul.slide li").eq(slideI).siblings().fadeOut(500);
        $(".contents ul.slide li").eq(slideI).fadeIn(500);
        
    },3000);
    
    //탭메뉴
    
    $(".contents .con .con1 h2").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(this).next("ul").addClass("on");
        
    });
    
    //팡업창
    
    $(".contents .con .con1 ul.notice li").eq(0).click(function(){
       $(".modal").fadeIn(500);
    });
    $(".modal .modal_inner button").click(function(){
       $(".modal").fadeOut(500);
    });
    
});//ready end