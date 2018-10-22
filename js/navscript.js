$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');

    }else{
        $('nav').removeClass('black');
    }
})

$(document).ready(function(){
    $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});

