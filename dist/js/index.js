$(document).ready(function() {
  $(".type--carousel").owlCarousel({
    items: 4,
    dots: true,
    responsive : {
      // breakpoint from 480 up
      0:{
        items: 2
      },
      640 : {
          items: 3
      },
      // breakpoint from 768 up
      852 : {
          items: 3
      }
    }
  });

  $('.nav--search input').on('input', function() {
    $('.nav--search-results').css({
      'display': 'block'
    })
  });

  $('.nav--search input').on('blur', function() {
    $('.nav--search-results').css({
      'display': 'none'
    })
  });

  var itemsToShow = $('.news--carousel').data('items-to-show');

  $(".news--carousel").owlCarousel({
    items: itemsToShow,
    dotsEach: itemsToShow
  });

  $('.menu-toggle').on('click', function() {
    $('.nav--bottom-menu-left').toggleClass('menu-active');
  });

});
