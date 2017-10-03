$(document).ready(function() {

  $('.typing').typeIt({
    cursor: true,
    lifeLike: true
  }).tiType("Hello, I'm Mallory ")

  /*
   * Navigation
   */
  var currentHash = '';
  var scrollTo = 0;
  var navElement = '';

  $('a[href^="#"]').click(function(e) {
    e.preventDefault();
    if ($('.nav').hasClass('responsive')) {
      $('.nav').toggleClass('responsive');
    }
    if (this.hash !== currentHash) {
      navElement = this;
      currentHash = this.hash;
      scrollTo = $(currentHash).offset().top;

      $('body, html').animate(
        {scrollTop: scrollTo - 60},
        1000,
        function() {
          $('.nav').find('a').removeClass('selected');
          $(navElement).addClass('selected');
        }
      );
    }
  });

  $('.logo').click(function(e) {
    if (!$(e.target).hasClass('fa-bars')) {
      $('body, html').animate(
        {scrollTop: 0},
        1000);
    }
  });

  $(window).scroll(function() {
    var scrollPosition = $(document).scrollTop() + 60;
    $('.nav a').each(function() {
      var currentNavLink = $(this);
      var referenceElement = $(currentNavLink.attr("href"));
      if (referenceElement.position().top <= scrollPosition
          && referenceElement.position().top + referenceElement.height() > scrollPosition) {
        $('.nav').find('a').removeClass('selected');
        currentNavLink.addClass('selected');
        currentHash = this.hash;
      } else if (scrollPosition === 60) {
        $('.nav').find('a').removeClass('selected');
        currentHash = '';
      }
    });
  });

  $('.bars').click(function() {
    $('.nav').toggleClass('responsive');
  });

});
