$(function () {
  $('.lazy').Lazy();
});


$('.tab__item').each(function(indx){
  $(this).hover(
    function(){
     $(this).find('.button').addClass('button_visible')
    },
    function(){
      $(this).find('.button').removeClass('button_visible')
    }
  )
})




// tabs

// $('.section__tab').each(function () {
//   if (($(this).hasClass('section__tab_active')) == false) {
//     $(this).removeClass('section__tab_active')
//   }
// })




$('.tabs').on('click', 'a', function (e) {
  e.preventDefault()

  $('.tabs__item').removeClass('tabs__item_active')
  $(this).addClass('tabs__item_active')

  var id = $(this).attr('href')

  var tabActive = $(id)
  $('.tab').not(tabActive).removeClass('tab_active')
  tabActive.addClass('tab_active')


})

// end  tabs


// inputs
// $(document).on('focus', 'input[type="text"]', function () {
//   $(this).addClass('input_focus');
// })
// $(document).on('blur', 'input[type="text"]', function () {
//   $(this).removeClass('input_focus');
// })

// inputs

//mobile menu


// products
// if (/Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
//   var product = $('.product');
//   product.each(function (indx) {
//     if (indx >= 3) $(this).hide()
//   })
// }

//products