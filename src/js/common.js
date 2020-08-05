$(function () {
  $('.lazy').Lazy();
});

window.addEventListener("orientationchange", function() {
  location.reload()
 
}, false);

var windowWidth = window.innerWidth

if(windowWidth < 550){
  $('.section__first').removeClass('lazy')
  $('.step__result').removeClass('lazy')
}


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


$('.tab').not($('.tab_active')).fadeOut(4)

$('.tabs').on('click', 'a', function (e) {
  e.preventDefault()

  $('.tabs__item').removeClass('tabs__item_active')
  $(this).addClass('tabs__item_active')

  var id = $(this).attr('href')

  var tabActive = $(id)
  $('.tab').not(tabActive).removeClass('tab_active').hide()
  tabActive.addClass('tab_active').fadeIn()


})

// end  tabs






// inputs 

$(document).on('focus', 'input[type="text"],input[type="tel"]', function () {
  $(this).addClass('input_focus');
})
$(document).on('blur', 'input[type="text"]', function () {
  if (!$(this).val()) {
    $(this).removeClass('input_focus');
  }
})

$(document).on('focus', 'textarea', function () {
  $(this).addClass('textarea_focus');
})


$(document).on('blur', 'textarea', function () {
  if (!$(this).val()) {
    $(this).removeClass('textarea_focus');
  }
})


$('input[type="tel"]').mask('+7 (000) 000-00-00', {
  placeholder: "+7 (___) ___-__-__"
});


// end inputs











//mobile menu



if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

  var mobileNav = $('<div>').addClass('nav_mobile'),
  mobileItems = $('.nav__inner').html(),
  mobileWrapper = $('<div>').addClass('nav_outer').prependTo('body'),
  burger = $('.burger'),
  closeButton = $('<div>').addClass('nav_close');
  
  
  mobileWrapper.append(mobileNav);
  mobileNav.append(closeButton);
  mobileNav.append(mobileItems);
  mobileNav.find('.nav__item').addClass('nav__item_mobile');
  
  
  // var headerCallback = $('.header__callback').clone().appendTo(mobileWrapper).addClass('header__callback_mobile');
  
  
  burger.on('click', function () {
    mobileWrapper.fadeIn()
    console.log('bur');
    $('body').addClass('stop_scrolling');
  })
  
  closeButton.on('click', function () {
   mobileWrapper.fadeOut()
   $('body').removeClass('stop_scrolling');
  })
  
  $('.nav__item_mobile').on('click',function(){
    mobileWrapper.fadeOut()
    $('body').removeClass('stop_scrolling');
  })

}





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
        slidesToShow: 1,
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
        slidesToShow: 1,
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
        slidesToShow: 1,
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
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
      }
    }
  ]
});

$('.slider__box_reviews').slick({
  lazyLoad: 'ondemand',
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: false,
  nextArrow: '<div class="slider__arrow slider__arrow_next"></div>',
  prevArrow: '<div class="slider__arrow slider__arrow_prev"></div>',
  appendArrows: $('.slider__arrows_reviews'),
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        
      }
    }
  ]
});



// end slider


$('#file,#file_1').on('change', function () {
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

  var bodyScroll = $(document).scrollTop() + 300

  

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

 var pnoneFixed = $('.phone_header').clone().addClass('phone_fixed')

$(document).on('scroll', function(){
  if($(this).scrollTop() >= 300){
 
    $('.nav').addClass('nav_fixed')
    $('.nav__item').addClass('nav__item_fixed')
    pnoneFixed.appendTo('.nav_fixed .nav__inner')

    
  }else{
    $('.nav').removeClass('nav_fixed')
    $('.nav__item').removeClass('nav__item_fixed')
    pnoneFixed.detach()
  }
})


$('.button_open').on('click', function(){
  $('.taste').removeClass('taste_hidden')
  $(this).hide()
})

