$(document).ready(function() {
  $(".type--carousel").owlCarousel({
    items: 4,
    dots: true
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

});
