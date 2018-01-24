
$(document).ready(function($){

    $('.selectric').selectric();
    
    $('#navBtn').click(function(){
        $('#nav').toggleClass('active');
    });
    
    $('#nav a[href^="#"]').bind("click", function(e) {
        $('#nav').toggleClass('active');
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr("href")).offset().top
        }, 1000);
        e.preventDefault();
    });
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 19) {
            $('.header').addClass('fixed');
        }
        else{
            $('.header').removeClass('fixed');
        }
    });
    
    $('.services-item').click(function(){
        var attrName = $(this).data('service');
        
        $('.services-item-modal').each(function(){
            if(attrName == $(this).data('modal') && !$(this).hasClass('active')) $(this).addClass('active');
            else $(this).removeClass('active');
        });
        
    });
    
    $('.services-item-modal').click(function(){
        $(this).removeClass('active');
    })
    
});


