$(document).ready(function(){

    $('.tb01').click(function(){
        $('.ti01').stop(true).animate({opacity:'1'});
        $('.ti02').stop(true).animate({opacity:'0.3'});
        $('.ti03').stop(true).animate({opacity:'0.3'});

        $('.tc01').show();
        $('.tc02').hide();
        $('.tc03').hide();
    });

    $('.tb02').click(function(){
        $('.ti01').stop(true).animate({opacity:'0.3'});
        $('.ti02').stop(true).animate({opacity:'1'});
        $('.ti03').stop(true).animate({opacity:'0.3'});

        $('.tc01').hide();
        $('.tc02').show();
        $('.tc03').hide();
    });

    $('.tb03').click(function(){
        $('.ti01').stop(true).animate({opacity:'0.3'});
        $('.ti02').stop(true).animate({opacity:'0.3'});
        $('.ti03').stop(true).animate({opacity:'1'});

        $('.tc01').hide();
        $('.tc02').hide();
        $('.tc03').show();
    });










//-------------------------------
});