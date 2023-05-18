// Swiper 

let swiper = new Swiper(".swiper1", {
    loop:true,

    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 30,
          centeredSlides: true,
          slidesPerView: "auto",
          loop:false,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
          loop:true,

        },
        600: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        1000: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 36
        }
      }
  });

let swiper2 =  new Swiper(".swiper2", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,

    },
    650: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 3,
    },
    850: {
      slidesPerView: 4,
    }
  }
});

//   radioActive 
  const radioActive = document.querySelector('.real-radio');
  radioActive.checked = true;


  // map
  let center = [44.99053017349655,38.92767125488769];

  function init() {

    let map = new ymaps.Map('map', {
      center: center,
      zoom: 16
    });

    let placemark = new ymaps.Placemark(center, {},
     {
      iconLayout: 'default#image',
      iconImageHref: '/img/section-map/marker2.svg',
      iconImageSize: [61, 61],
    });

    let placemark2 = new ymaps.Placemark([44.98991531986888,38.92749462549118], {},
      {
       iconLayout: 'default#image',
       iconImageHref: '/img/section-map/toys2.svg',
       iconImageSize: [61, 61],
     });

     let placemark3 = new ymaps.Placemark([44.988247972729226,38.92457638208298], {},
      {
       iconLayout: 'default#image',
       iconImageHref: '/img/section-map/azs2.svg',
       iconImageSize: [61, 61],
     });

     let placemark4 = new ymaps.Placemark([44.98858725117382,38.93064577385959], {},
      {
       iconLayout: 'default#image',
       iconImageHref: '/img/section-map/help2.svg',
       iconImageSize: [61, 61],
     });

     let placemark5 = new ymaps.Placemark([44.99057434609707,38.92833907410679], {},
      {
       iconLayout: 'default#image',
       iconImageHref: '/img/section-map/shopping-basket2.svg',
       iconImageSize: [61, 61],
     });

    
  
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
    map.geoObjects.add(placemark2);
    map.geoObjects.add(placemark3);
    map.geoObjects.add(placemark4);
    map.geoObjects.add(placemark5);
  }
  
  ymaps.ready(init);


  // Taбы

  // Нашли все заголовки табов по data атрибуту
const tabHeaders = document.querySelectorAll('[data-tab]');
// Нашли все контент боксы
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function (item) {
    item.addEventListener('click', function () {

        // 1. Скрыть все content box
        contentBoxes.forEach(function (item) {
            item.classList.add('none');
        });

        // 2. Выбрать нужный content box и показать его
        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('none');
    })
});

// Активный блок на табах

const tabItems = Array.from(document.querySelectorAll('.section-descr__item'));
const clearActiveClass = (element, className = 'active') => {
  element.find(item => item.classList.remove(`${ className }`))
}

const setActiveClass = (element, index, className = 'active') => {
  element[index].classList.add(`${ className }`)
}

const checkoutTabs = (item, index) => {
  item.addEventListener('click', () => {
    
    if (item.classList.contains('active')) return
  
    clearActiveClass(tabItems)
    
    setActiveClass(tabItems, index)
  })
}

tabItems.forEach(checkoutTabs)



// Swiper-galery

document.addEventListener("DOMContentLoaded", function() {
  const galleryThumbs = new Swiper(".gallery-thumbs", {
    centeredSlides: true,
    centeredSlidesBounds: true,
    direction: "horizontal",
    spaceBetween: 30,
    slidesPerView: 3,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    watchOverflow: true,
    breakpoints: {
      960: {
        direction: "vertical",
        slidesPerView: 3  
      }
    }
  });

  const galleryTop = new Swiper(".gallery-top", {
    direction: "horizontal",
    spaceBetween: 30,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    a11y: {
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide"
    },
    keyboard: {
      enabled: true
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });

  galleryTop.on("slideChangeTransitionStart", function() {
    galleryThumbs.slideTo(galleryTop.activeIndex);
  });

  galleryThumbs.on("transitionStart", function() {
    galleryTop.slideTo(galleryThumbs.activeIndex);
  });
});


// выпадающий список в слайдере с картинкой
const titleActive = document.querySelector('.description__subtitle-item');
const vsbBtn = document.querySelector('.description__subtitle-visible');
const descr = document.querySelector('.description');

vsbBtn.addEventListener('click', () => {
  titleActive.classList.toggle('active');
  descr.classList.toggle('active')
});




let mobileNavButton = document.querySelector('.mobile-nav-button');
let mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
let overlay = document.querySelector('.mobile-nav-overlay');
let mobileNav = document.querySelector('.mobile-nav');



function calcFullScrollHeight() {
	return Math.max(
		document.body.scrollHeight,
		document.documentElement.scrollHeight,
		document.body.offsetHeight,
		document.documentElement.offsetHeight,
		document.body.clientHeight,
		document.documentElement.clientHeight
	);
}

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	},
};

// Включение мобильной навигации
// Клик по кнопке
mobileNavButton.addEventListener('click', function () {
	// Анимация кнопки
	mobileNavIcon.classList.toggle('active');
    // Расположение кнопки после нажатия
    mobileNavButton.classList.toggle('move');
	// Анимация оверлея
	overlay.classList.toggle('visible');
	// Анимация появления навигации
	mobileNav.classList.toggle('visible');
	// Запрещаем скролл внутри страницы
	document.body.classList.toggle('no-scroll');

	// Решаем проблему с прыгающим контентом, когда исчезает скролл
	if ( calcFullScrollHeight() > window.innerHeight && !isMobile.any()) {
		document.body.classList.toggle('fix-scroll-jump');
	}

});

// Клик по оверлею вокруг навигации
overlay.addEventListener('click', function () {
	turnOffMobileNav();
});

// Закрываем моб навигацию при клике на ссылки внутрии нее
mobileNav.querySelectorAll('a').forEach(function (link) {
	link.addEventListener('click', function () {
		turnOffMobileNav();
	});
});

// Функция выключения мобильной навигации
function turnOffMobileNav() {
	// Выключаем иконку
	if (mobileNavIcon.classList.contains('active')) {
		mobileNavIcon.classList.remove('active');
	}

    //Выключаем расположение кнопки после нажатия
    if (mobileNavButton.classList.contains('move')) {
		mobileNavButton.classList.remove('move');
	}

	// Выключаем оверлей
	if (overlay.classList.contains('visible')) {
		overlay.classList.remove('visible');
	}

	// Выключаем панель с меню
	if (mobileNav.classList.contains('visible')) {
		mobileNav.classList.remove('visible');
	}

	// Выключаем замок на скролл для всей страницы
	if (document.body.classList.contains('no-scroll')) {
		document.body.classList.remove('no-scroll');
	}

	// Выключаем класс fix-scroll-jump
	if (document.body.classList.contains('fix-scroll-jump')) {
		document.body.classList.remove('fix-scroll-jump');
	}
}

// // Show nav on scroll
// window.addEventListener('scroll', function () {
// 	const mobile = document.querySelector('.mobile');
// 	mobile.classList.toggle('sticky', window.scrollY > window.innerHeight);
// });

// Выпадающий список в mobile-nav
const columnItems = document.querySelectorAll('.column-nav__item');

columnItems.forEach((item) => {
  const btnDropDown = item.querySelector('.column-nav__item-drop-btn');
  const menu = item.querySelector('.column-nav__link-wrapper');

  btnDropDown.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
});
