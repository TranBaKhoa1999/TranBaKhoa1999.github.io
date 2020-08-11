$(window).scroll(function(){
    var scroll_value = $(window).scrollTop();
    $('#intro').css({
      'background-position-y':- scroll_value +'px'
    });
});