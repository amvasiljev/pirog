$(function () {
  $('.lazy').Lazy();
});





$('.preview').each(function (indx) {
  $(this).hover(
    function () {
      $(this).find('.button').addClass('button_visible')
    },
    function () {
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




$('.order__input').on('focus', function () {
  $(this).addClass('order__input_active');
})
$('.order__input').on('blur', function () {
  if (!$(this).val()) {
    $(this).removeClass('order__input_active');
  }


})
$('.order__textarea').on('focus', function () {
  $(this).addClass('order__textarea_active');
})
$('.order__textarea').on('blur', function () {
  if (!$(this).val()) {
    $(this).removeClass('order__textarea_active');
  }

})


$('.order__input_phone').mask('+7 (000) 000-00-00', {
  placeholder: "+7 (___) ___-__-__"
});
// $('.feedback__input_phone').mask('+7 (000) 000-00-00', {
//   placeholder: "+7 (___) ___-__-__"
// });
// inputs

//mobile menu



// if (/Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
//  
// }





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
      }
    }
  ]
});

$('.slider__box_gallery').slick({
  lazyLoad: 'ondemand',
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  nextArrow: '<div class="slider__arrow slider__arrow_next"></div>',
  prevArrow: '<div class="slider__arrow slider__arrow_prev"></div>',
  appendArrows: $('.slider__arrows_gallery'),
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
      }
    }
  ]
});

$('.slider__box_reviews').slick({
  lazyLoad: 'ondemand',
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  nextArrow: '<div class="slider__arrow slider__arrow_next"></div>',
  prevArrow: '<div class="slider__arrow slider__arrow_prev"></div>',
  appendArrows: $('.slider__arrows_reviews'),
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
      }
    }
  ]
});



// end slider


$('#file').on('change', function () {
  var arrayFiles = this.files, // массив с выбранными файлами
    formItem = this.parentNode, // родительский элемент, для того чтобы вставить список с файлами
    listFiles = document.createElement('ul'), // список с файлами
    li = ''; // файлы

  // Если список с файлами уже вставлен в ДОМ, то удаляем его
  if (formItem.querySelector('.order__list')) {
    formItem.querySelector('.order__list').remove();
  }

  listFiles.className = 'order__list'; // 

  for (var i = 0; i < arrayFiles.length; i++) {
    li += '<li>' + arrayFiles[i].name + '</li>'; // <li>Имя файла</li>
  }

  listFiles.innerHTML = li;

  formItem.appendChild(listFiles);
});


$('.nav__item').on('click', function (e) {
  e.preventDefault();


  var id = $(this).attr('href');
  var marker = $(id);


  $('html, body').animate({
    scrollTop: marker.offset().top - 80,
    easing: 'linear'
  }, 1000);

  $(this).addClass('nav__item_active')
  $('.nav__item').not($(this)).removeClass('nav__item_active')

  $('.nav__item').each(function () {
    if ($(this).attr('href') == id) {
      $(this).addClass('nav__item_active')
    }
  })

})


$(window).bind('mousewheel DOMMouseScroll', function (event) {
  if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {

    if ($(document).scrollTop() <= 0) return;
    up();

  } else {


    if ($(document).scrollTop() >= document.outerHeight) return;

    up()
  }
});


function up() {

  var bodyScroll = $('body').scrollTop() + 300

  if($('body').scrollTop() >= 300){
    $('.nav').addClass('nav_fixed')
    $('.nav__item').addClass('nav__item_fixed')
  }else{
    $('.nav').removeClass('nav_fixed')
    $('.nav__item').removeClass('nav__item_fixed')
  }

  $('.section').each(function () {
    if ($(this).offset().top <= bodyScroll && $(this).offset().top != 0) {
      $('.section').removeClass('up')
      $(this).addClass('up')

    } else {
      $(this).removeClass('up')
    }
  })


  var attr = '#' + $('.up').attr('id')

  $('.nav__item').each(function () {
    if ($(this).attr('href') == attr) {
      $(this).addClass('nav__item_active')
    } else {
      $(this).removeClass('nav__item_active')
    }
  })

}