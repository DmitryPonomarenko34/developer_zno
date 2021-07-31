$(function () {

  $(".rate").rateYo({
    readOnly: true,
    starSvg: '<svg width="18" height="16" viewBox="0 0 18 16" fill="none"><path d="M9.53412 0.4565L11.7609 4.96775L16.7394 5.6915C17.2276 5.76275 17.4226 6.36275 17.0694 6.707L13.4664 10.2185L14.3169 15.1775C14.4001 15.6643 13.8894 16.0348 13.4529 15.8053L9.00012 13.4645L4.54662 15.806C4.11012 16.0355 3.59937 15.6643 3.68262 15.1775L4.53312 10.2185L0.93012 6.707C0.57687 6.36275 0.77187 5.762 1.26012 5.6915L6.23862 4.96775L8.46537 0.4565C8.68437 0.0140002 9.31587 0.0140002 9.53412 0.4565Z"/></svg>',
    normalFill: '#d9d9d9',
    ratedFill: '#f3c03c',
    starWidth: '18px',
    spacing: '3px',
  });

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