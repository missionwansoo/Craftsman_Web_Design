$(document).ready(function(){
    
    //네비게이션
    
    $("nav ul.gnb>li").hover(function(){
        $(this).find("ul.sub").stop().slideDown();
    },function(){
        $(this).find("ul.sub").stop().slideUp();
    });
    
    //슬라이드
    
    $(".slide ul li").eq(0).siblings().hide();
    
    var slideI=0;
    
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        
        //console.log(slideI)
        
        $(".slide ul li").eq(slideI).siblings().fadeOut(500);
        $(".slide ul li").eq(slideI).fadeIn(500);
        
    },3000);
    
    //팝업창
    
    $(".con .notice ul li").eq(0).click(function(){
        $(".modal").stop().fadeIn(500);
    });
    $(".modal .modal_popup button").click(function(){
        $(".modal").stop().fadeOut(500);
    });
    
    
});//ready end