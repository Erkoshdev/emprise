//header navigation on tablet
$('.toggle-header-nav').click(function (e) {
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $('.header-nav').addClass('show')
    $('.mobile-menu').addClass('show')
    $('body').addClass('scroll-locked')
  } else {
    $('.header-nav').removeClass('show')
    $('.mobile-menu').removeClass('show')
    $('body').removeClass('scroll-locked')
  }
})

//hide menu on click outside on tablet
$(document).mouseup(function(e) {
  var container = $(".header-nav, .toggle-header-nav, .mobile-menu");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    if($('.header-nav').hasClass('show')) {
      $('.toggle-header-nav').removeClass('active')
      $('.header-nav').removeClass('show')
      $('.mobile-menu').removeClass('show')
      $('body').removeClass('scroll-locked')
    }
  }
});


