$(function () {

  
  $('.tabs__control-link').on('click', function (e) {
    e.preventDefault();

    $('.tabs__control-link').removeClass('tabs__control-link--active');
    $(this).addClass('tabs__control-link--active');

    $.ajax({
      url: $(this).attr('href'),
      type: 'GET',
      beforeSend: function () {
        $('#tabs__content').empty();
      },
      success: function (responce) {
        $('#tabs__content').append(responce);
      },
      error: function () {
        alert('Error!');
      },
    });

  });

  $('.banner__btn--close').on('click', function () {
    $(this).closest('.banner').hide();
  });

  // if($(window).width() <= 1200){
  //   $('.submenu').hide();
  //   $('.menu__list-item').on('click', function () {
  //     $(this).children('.submenu').slideToggle();
  //   });
  // }


  if ($(window).width() <= 992) {
    $('.footer-top__list').hide();
    $('.footer-top__box').on('click', function () {
      $(this).next().slideToggle();
    });
  };

});