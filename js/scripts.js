/*
        // for hover tooltips
        $(document).ready(function() {
          $('[data-toggle="tooltip"]').tooltip();
        });
      */
// carousel buttons and handling of pause/play actions
$(document).ready(function() {
  $('#mycarousel').carousel({
    interval: 3000
  });
  $('#carouselButton').click(function() {
    if ($('#carouselButton').children('span').hasClass('fa-pause')) {
      $('#mycarousel').carousel('pause'); // pause carousel
      // remove and change class hence the icon to play
      $('#carouselButton').children('span').removeClass('fa-pause');
      $('#carouselButton').children('span').addClass('fa-play');
    } else if ($('#carouselButton').children('span').hasClass('fa-play')) {
      $('#mycarousel').carousel('cycle'); // replay carousel
      // remove and change class hence the icon to pause
      $('#carouselButton').children('span').removeClass('fa-play');
      $('#carouselButton').children('span').addClass('fa-pause');
    }

  });
});
