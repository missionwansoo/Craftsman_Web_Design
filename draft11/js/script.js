$(document).ready(function(){
    
    //네비게이션
    
    
    $("nav ul.gnb li").hover(function(){
        $(this).find("ul.sub").stop().fadeIn(500);
//        $(".sub_bg").stop().fadeIn(500);
    },function(){
        $(this).find("ul.sub").stop().fadeOut(500);
//        $(".sub_bg").stop().fadeOut(500);
    });
    
    //슬라이드
    
    $(".slide ul li").eq(0).siblings().css({"left":"-800px"});
    
    var slideI=0;
    
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        
        //console.log(slideI);
        
        $(".slide ul li").eq(slideI).siblings().animate({"left":"-800px"},500);
        $(".slide ul li").eq(slideI).animate({"left":"0"},500);
        
    },3000);
    
    
    //팝업창
    
    $(".notice ul li").eq(0).click(function(){
       $(".modal").stop().fadeIn(500); 
    });
    $(".modal .modal_popup button").click(function(){
       $(".modal").stop().fadeOut(500); 
    });
    
    
    
    
    
    
});//ready end