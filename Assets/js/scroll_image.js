$(window).scroll(function () {
  var start_Resume = 600;
  if (window.scrollY > start_Resume) {
    var scroll_value = $(window).scrollTop() - start_Resume;
    $('#resume').css({
      'background-position-y': -scroll_value + 'px'
    });
  }
});