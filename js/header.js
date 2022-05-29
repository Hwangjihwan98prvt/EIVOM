$(document).ready(function(){

    //01. 헤더 버튼

    $(".btn_right").click(function(){
        $(".btn_right .line:first-child").toggleClass('top_clicked');
        $(".btn_right .line:first-child").toggleClass('top');
    });
    $(".btn_right").click(function(){
        $(".btn_right .line:last-child").toggleClass('bottom_clicked');
        $(".btn_right .line:last-child").toggleClass('bottom');
    });
    $(".btn_right").click(function(){
        $(".btn_right .mid").fadeToggle(0.3);
    });

    //02. 헤더 메뉴
    $(".btn_right").click(function(){
        $(".header_menu").toggleClass('off');
    });

//------------------------
});