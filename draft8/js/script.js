$(document).ready(function(){
    
    
    //네비게이션
    
    $("nav ul.gnb>li").hover(function(){
        $("nav ul.gnb>li ul.sub,.nav_bg").stop().slideDown();
    },function(){
        $("nav ul.gnb>li ul.sub,.nav_bg").stop().slideUp();
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
        
        //console.log(slideI);
        
        $(".slide ul li").eq(slideI).siblings().animate({"left":"-1200px"},500);
        $(".slide ul li").eq(slideI).animate({"left":"0"},500);
        
    },3000);
    
    
    //탭 메뉴
    
    $(".notice h2").click(function(){
        $(".gal h2").removeClass("on");
        $(".gal h2").next("ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    });
    
    $(".gal h2").click(function(){
        $(".notice h2").removeClass("on");
        $(".notice h2").next("ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    });
    
    
    //팡업창
    
    $(".notice ul li").eq(0).click(function(){
       $(".modal").stop().fadeIn(500); 
    });
    
    $(".modal .modal_popup button").click(function(){
       $(".modal").stop().fadeOut(500); 
    });
    
    
    
}); //ready end











