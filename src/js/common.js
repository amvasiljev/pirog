$(function () {
  $('.lazy').Lazy();
});





$('.preview').each(function(indx){
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



// sliders

$('.slider__box_foto').slick({
  lazyLoad: 'ondemand',
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  nextArrow: '<div class="slider__arrow slider__arrow_next"></div>',
  prevArrow: '<div class="slider__arrow slider__arrow_prev"></div>',
  appendArrows: $('.slider__arrows_foto'),
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        // nextArrow: '<img class="slider__arrow slider__arrow_next" src="/assets/img/arrow_next_mobile.png" alt="">',
        // prevArrow: '<img class="slider__arrow slider__arrow_prev" src="/assets/img/arrow_prev_mobile.png" alt="">',
      }
    }
  ]
});
$('.slider__box_numbers').slick({
  lazyLoad: 'ondemand',
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  nextArrow: '<div class="slider__arrow slider__arrow_next"></div>',
  prevArrow: '<div class="slider__arrow slider__arrow_prev"></div>',
  appendArrows: $('.slider__arrows_numbers'),
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        // nextArrow: '<img class="slider__arrow slider__arrow_next" src="/assets/img/arrow_next_mobile.png" alt="">',
        // prevArrow: '<img class="slider__arrow slider__arrow_prev" src="/assets/img/arrow_prev_mobile.png" alt="">',
      }
    }
  ]
});
$('.slider__box_3d').slick({
  lazyLoad: 'ondemand',
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  nextArrow: '<div class="slider__arrow slider__arrow_next"></div>',
  prevArrow: '<div class="slider__arrow slider__arrow_prev"></div>',
  appendArrows: $('.slider__arrows_3d'),
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        // nextArrow: '<img class="slider__arrow slider__arrow_next" src="/assets/img/arrow_next_mobile.png" alt="">',
        // prevArrow: '<img class="slider__arrow slider__arrow_prev" src="/assets/img/arrow_prev_mobile.png" alt="">',
      }
    }
  ]
});



// end slider