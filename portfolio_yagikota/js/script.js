$(function() {
  // $('.more_btn i').on('click', function () { 
  //   if ($(this).hasClass('open')){
  //     $(this).parent().html('<i class="fas fa-chevron-up close" style="font-size: 4ex;"></i>');
  //     $('.content_wrapper').removeClass('slide-up').addClass('slide-down');
  //   } else {
  //     $(this).parent().html('<i class="fas fa-chevron-down open" style="font-size: 4ex;"></i>').removeClass('close-btn');
  //     $('.content_wrapper').removeClass('slide-down').addClass('slide-up');
  //   }
  // });

  $('.more_btn').on('click', function () {
    if ($('.content_wrapper').hasClass('hidden')) {
      $(this).html('<i class="fas fa-chevron-up" style="font-size: 4ex;"></i>');
      $('.content_wrapper').addClass('content_wrapper_opened');
      $('.content_wrapper').removeClass('hidden');
      $(this).parent().addClass('more_btn_background_opened');
    } else {
      $(this).html('<i class="fas fa-chevron-down" style="font-size: 4ex;"></i>');
      $('.content_wrapper').removeClass('content_wrapper_opened');
      $('.content_wrapper').addClass('hidden');
      $(this).parent().removeClass('more_btn_background_opened');
    }
  });

  $('.fixed .container').on('click', function() {
    if ($(this).children().hasClass('chosen')) {
    } else {
      $('.fixed .container').children().removeClass('chosen');
      $('.fixed .container i').css('color', '#fff');
      $(this).children().addClass('chosen');
      $(this).children().children().css('color', '#2997ff')
    }
  });
});















