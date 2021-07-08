$(document).ready(function(){
    
    //네비게이션
    
    $("nav ul.gnb>li").hover(function(){
        $(this).find("ul.sub").stop().slideDown();
    },function(){
        $(this).find("ul.sub").stop().slideUp();
    });
    
    
    //슬라이드
    
    $(".slide ul li").eq(0).siblings().css({"top":"-300px"});
    
    var slideI=0;
    
    setInterval(function(){
        
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        
        //console.log(slideI);
        
        $(".slide ul li").eq(slideI).siblings().animate({"top":"-300px"});
        $(".slide ul li").eq(slideI).animate({"top":"0"});
        
    },3000);
    
    
    //팝업창
    
    $(".notice ul li").eq(0).click(function(){
       $(".modal").stop().fadeIn(500); 
    });
    $(".modal .modal_popup button").click(function(){
       $(".modal").stop().fadeOut(500); 
    });
    
    
    
    
});//ready end