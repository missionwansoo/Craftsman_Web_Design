$(document).ready(function(){
    
    //네비게이션
    
    $("header nav ul.gnb>li").hover(function(){
        $("ul.sub").stop().slideDown();
    },function(){
        $("ul.sub").stop().slideUp();
    });
    
    //메인 슬라이드
    
    $(".slide ul.slide_all>li").eq(0).siblings().css("top","-300px");
    
    var slideI=0;
    
    setInterval(function(){
       if(slideI<2){
           slideI++;
       }else{
           slideI=0;
       }
    $(".slide ul.slide_all>li").eq(slideI).siblings().animate({"top":"-300px"},500);
    $(".slide ul.slide_all>li").eq(slideI).animate({"top":"0"},500);
//        console.log(slideI);
    },3000);
    
    //공지사항
    
    $(".contents .note_gal h3").click(function(){
        $(".contents .note_gal h3").removeClass("on");
        $(this).addClass("on");
        $(".contents .note_gal ul").removeClass("on");
        $(this).next("ul").addClass("on");   
    });
    
    //팡업창
    
    $(".contents .note_gal .notice>li").eq(0).click(function(){
        $("#modal").fadeIn();
    });
    $("#modal button").click(function(){
        $("#modal").fadeOut();
    });
    
    
});//ready end