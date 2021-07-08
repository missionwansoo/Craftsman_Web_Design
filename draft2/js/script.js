$(document).ready(function(){
   
    //네비게이션
    
    $("header nav ul.gnb>li").mouseenter(function(){
        $(".nav_gnb, ul.sub").stop().slideDown();
    });
    
    $("header nav ul.gnb>li").mouseleave(function(){
        $(".nav_gnb, ul.sub").stop().slideUp();
    });
    
    //슬라이드
    
    var slideI=0;
    
    setInterval(function(){
        
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        
//        console.log(slideI);
        
        $("ul.slide li").eq(slideI).siblings().animate({left:"-1200px"},500);
        $("ul.slide li").eq(slideI).animate({left:"0"},500);
        
    },3000);
    
    //탭메뉴
    
//    $(".contents .notice>h2").click(function(){
//        $(".contents .gal>h2").removeClass("on");
//        $(".contents .gal ul").removeClass("on");
//        $(".contents .notice>h2").addClass("on");
//        $(".contents .notice ul").addClass("on");
//    });
//    
//    $(".contents .gal>h2").click(function(){
//        $(".contents .notice>h2").removeClass("on");
//        $(".contents .notice ul").removeClass("on");
//        $(".contents .gal>h2").addClass("on");
//        $(".contents .gal ul").addClass("on");
//    });
    
    //팝업창
    
    $(".contents .notice ul>li").click(function(){
        $(".modal").fadeIn();
    });
    $(".modal .modal_popup button").click(function(){
        $(".modal").fadeOut();
    });
    
    
});//ready end