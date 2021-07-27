$(function () {

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