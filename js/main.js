$(function() {  
  $('.readmore').on('click', function(event){
    event.preventDefault();
    $(this).next('#is-hidden').slideDown(250);
    $(this).hide();
    $(this).nextAll('.readless').show();
  });
  $('.readless').on('click', function(event){
    event.preventDefault();
    $(this).prev('#is-hidden').slideUp(250);
    $(this).hide();

    var that = $(this);
    setTimeout(function() {
      that.prevAll('.readmore').show();
    }, 200);
  });

  $('#send').on('click', function(event){
    event.preventDefault();
    $('#thank-you').show();
  });

  $('.plus').on('click', function(event){
    event.preventDefault();
    if(false == $(this).next('.is-hidden').is(':visible')) {
      $('.is-hidden').slideUp(500);  
      $('.is-expanded').toggleClass('is-minimised is-expanded');
    }
    $(this).next('div').slideToggle(300);
    $(this).toggleClass('is-minimised is-expanded');
  });

  $('.sneakpeek').on('click', function () {
    if($(this).children('.video').get(0).paused){
      $(this).children('.video').get(0).play();
      $(this).children('.play-button').fadeOut();
    }else{
      $(this).children('.video').get(0).pause();
      $(this).children('.play-button').fadeIn();
    }
  });

  $('.hidden').waypoint(function() {
    $(this.element).removeClass('hidden').addClass('is-active');
    }, {
      offset: '65%'
  });

  $('#home').on('click', function() {
    $('html, body').animate({scrollTop: $('#home-section').offset().top}, 200);
  });

  $('#sneakpeek').on('click', function() {
    $('html, body').animate({scrollTop: $('#sneakpeek-section').offset().top}, 1000);
  });

  $('#about').on('click', function() {
    $('html, body').animate({scrollTop: $('#about-section').offset().top}, 1400);
  });

  $('#contact').on('click', function() {
    $('html, body').animate({scrollTop: $('#contact-section').offset().top}, 1400);
  });

  var amountScrolled = 1000;

  $(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
        $('a.sf-back-to-top').fadeIn('slow');
    } else {
        $('a.sf-back-to-top').fadeOut('slow');
    }
  });
  $('a.sf-back-to-top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 700);
    return false;
  });

  $('.autoplay').slick({
    infintie: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
  });


  var didScroll;
  var lastScrollTop = 0;
  var scroll = 1;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function(event){
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
  }, 200);

  function hasScrolled() {
    var st = $(this).scrollTop();    
    if(Math.abs(lastScrollTop - st) <= scroll)
        return;
    if (st > lastScrollTop && st > navbarHeight){
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;
  }
  
});


