$(document).ready(function() {

  /*
   * Hero Typing Animation
   */
  $('.typing').typeIt({
    cursor: true,
    loop: true,
    lifeLike: true
  })
  .tiPause(2000)
  .tiType('developer').tiPause(2000).tiDelete(9)
  .tiType('designer').tiPause(2000).tiDelete(8)
  .tiType('creative thinker').tiPause(2000).tiDelete(16)
  .tiType('problem solver').tiPause(2000).tiDelete(14)
  .tiType('fitness enthusiast').tiPause(2000).tiDelete(18);

  /*
   * Navigation
   */
  var currentHash = '';
  var scrollTo = 0;
  var navElement = '';

  $('a[href^="#"]').click(function(e) {
    e.preventDefault();
    $('.nav').toggleClass('responsive');
    if (this.hash !== currentHash) {
      navElement = this;
      currentHash = this.hash;
      scrollTo = $(currentHash).offset().top;

      $('body').animate(
        {scrollTop: scrollTo - 60},
        1000,
        function() {
          $('.nav').find('a').removeClass('selected');
          $(navElement).addClass('selected');
        }
      );
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
      } else if (scrollPosition === 60) {
        $('.nav').find('a').removeClass('selected');
      }
    });
  });

  $('.bars').click(function(e) {
    $('.nav').toggleClass('responsive');
  });

});
