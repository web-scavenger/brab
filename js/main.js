$(document).on('ready', function() {
    $('.slider__frame').slick({
      slidesToScroll: 1,
      infinite: true,
      dots : true,
    });

    $('#mobile__btn').click(function(){
      $('.nav').toggle('slow');
    })
  });