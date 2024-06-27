// const isMobile = {
//   Android: function () {
//     return navigator.userAgent.match(/Android/i);
//   },
//   BlackBerry: function () {
//     return navigator.userAgent.match(/BlackBerry/i);
//   },
//   iOS: function () {
//     return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//   },
//   Opera: function () {
//     return navigator.userAgent.match(/Opera Mini/i);
//   },
//   Windows: function () {
//     return navigator.userAgent.match(/IEMobile/i);
//   },
//   any: function () {
//     return (
//       isMobile.Android() ||
//       isMobile.BlackBerry() ||
//       isMobile.iOS() ||
//       isMobile.Opera() ||
//       isMobile.Windows()
//     );
//   }
// };

// if (isMobile.any()) {
//   document.body.classList.add('_touch');
// } else {
//   document.body.classList.add('_pc');
// }
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
const wrapper = document.querySelector('.wrapper');
const menuLinks = document.querySelectorAll('.menu__link');
const benefitItems = document.querySelectorAll('.benefit-item');
const solutionItems = document.querySelectorAll('.solutions__item');
const solutionItem1 = document.querySelector('.solutions__list li:nth-child(1)');
const solutionItem2 = document.querySelector('.solutions__list li:nth-child(2)');
const solutionItem3 = document.querySelector('.solutions__list li:nth-child(3)');
const solutionItem4 = document.querySelector('.solutions__list li:nth-child(4)');
const solutionItem5 = document.querySelector('.solutions__list li:nth-child(5)');
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');


if (iconMenu) {
  iconMenu.addEventListener('click', function () {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

let pageSlider = new Swiper('.page', {
  direction: 'vertical',
  slidesPerView: 'auto',
  parallax: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
  },
  watchOverflow: true,
  speed: 800,
  observer: true,
  observerParents: true,
  observeSlideChildren: true,
  pagination: {
    el: '.page__pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'page__bullet',
    bulletActiveClass: 'page__bullet_active',
  },
  scrollbar: {
    el: '.page__scroll',
    dragClass: 'page__drag-scroll',
    draggable: true,
  },
  init: false,
  on: {
    init: function () {
      menuSlider();
      setScrollType();
      wrapper.classList.add('_loaded');
    },
    slideChange: function () {
      menuSliderRemove();
      menuLinks[pageSlider.realIndex].classList.add('_active');
      benefitItems.forEach(benefitItem => {
        benefitItem.classList.add('_active');
      });
      animSolution();
    },
    resize: function () {
      setScrollType();
    }
  },
});

// let advSlider = new Swiper('.advantage__slider', {
//   pagination: {
//     el: 'swiper-pagination',
//   },
// });

function animSolution() {
  solutionItem1.animate({
    opacity: [0, 1],
    transform: ["translate(-120%, 0px)", "translate(0px, 0px)"],
    transition: "all 0.8s ease 0s",
  }, {
    duration: 2000,
    animationTimingFunction: 'ease',
    animationFillMode: 'forwards',
    animationDelay: '0.5s',
  });
  solutionItem2.animate({
    opacity: [0, 1],
    transform: ["translate(120%, 0px)", "translate(0px, 0px)"],
    transition: "all 0.8s ease 0.2s"
  }, {
    duration: 2000,
    animationTimingFunction: 'ease',
    animationFillMode: 'forwards',
    animationDelay: '0.7s',
  });
  solutionItem3.animate({
    opacity: [0, 1],
    transform: ["translate(-120%, 0px)", "translate(0px, 0px)"],
    transition: "all 0.8s ease 0.4s"
  }, {
    duration: 2000,
    animationTimingFunction: 'ease',
    animationFillMode: 'forwards',
    animationDelay: '0.9s',
  });
  solutionItem4.animate({
    opacity: [0, 1],
    transform: ["translate(120%, 0px)", "translate(0px, 0px)"],
    transition: "all 0.8s ease 0.6s"
  }, {
    duration: 2000,
    animationTimingFunction: 'ease',
    animationFillMode: 'forwards',
    animationDelay: '1.1s',
  });
  solutionItem5.animate({
    opacity: [0, 1],
    transform: ["translate(-120%, 0px)", "translate(0px, 0px)"],
    transition: "all 0.8s ease 0.8s"
  }, {
    duration: 2000,
    animationTimingFunction: 'ease',
    animationFillMode: 'forwards',
    animationDelay: '1.3s',
  });
}

const animItems = document.querySelectorAll('._anim-items');
// const animShow = document.querySelectorAll('._anim-show');
if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
        // animShow.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
          // animShow.classList.remove('_active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}

// if (animShow.length > 0) {
//   window.addEventListener('scroll', animShowOnScroll);
//   function animShowOnScroll() {
//     for (let index = 0; index < animShow.length; index++) {
//       const animShowItem = animShow[index];
//       const animShowItemHeight = animShowItem.offsetHeight;
//       const animShowItemOffset = offset(animShowItem).top;
//       const animShowStart = 1;

//       let animShowItemPoint = window.innerHeight - animShowItemHeight / animShowStart;
//       if (animShowItemHeight > window.innerHeight) {
//         animShowItemPoint = window.innerHeight - window.innerHeight / animShowStart;
//       }

//       if ((pageYOffset > animShowItemOffset - animShowItemPoint) && pageYOffset < (animShowItemOffset + animShowItemHeight)) {
//         animShowItem.classList.add('_active');
//       } else {
//         if (!animShowItem.classList.contains('_anim-no-hide')) {
//           animShowItem.classList.remove('_active');
//         }
//       }
//     }
//   }
//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//       scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//   }

//   setTimeout(() => {
//     animOnScroll();
//   }, 300);
// }


// if (menuLinks.length > 0) {
//   menuLinks.forEach(menuLink => {
//     menuLink.addEventListener('click', onMenuLinkClick);
//   });
//   function onMenuLinkClick(e) {
//     const menuLink = e.target;
//     if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//       const gotoBlock = document.querySelector(menuLink.dataset.goto);
//       const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

//       if (iconMenu.classList.contains('_active')) {
//         document.body.classList.remove('_lock');
//         iconMenu.classList.remove('_active');
//         menuBody.classList.remove('_active');
//       }

//       window.scrollTo({
//         top: gotoBlockValue,
//         behavior: "smooth"
//       });
//       e.preventDefault();
//     }
//   }
// }

function menuSlider() {
  if (menuLinks.length > 0) {
    menuLinks[pageSlider.realIndex].classList.add('_active');
    for (let index = 0; index < menuLinks.length; index++) {
      const menuLink = menuLinks[index];
      menuLink.addEventListener('click', function (e) {
        menuSliderRemove();
        pageSlider.slideTo(index, 800);
        menuLink.classList.add('_active');
        if (iconMenu.classList.contains('_active')) {
          document.body.classList.remove('_lock');
          iconMenu.classList.remove('_active');
          menuBody.classList.remove('_active');
        }
        // benefitItem.classList.add('_active');
        e.preventDefault();
      });
    }
  }
}

function menuSliderRemove() {
  let menuLinkActive = document.querySelector('.menu__link._active');
  if (menuLinkActive) {
    menuLinkActive.classList.remove('_active');
  }
}

function setScrollType() {
  if (wrapper.classList.contains('_free')) {
    wrapper.classList.remove('_free');
    pageSlider.params.freeMode = false;
  }

  for (let index = 0; index < pageSlider.slides.length; index++) {
    const pageSlide = pageSlider.slides[index];
    const pageSlideContent = pageSlide.querySelector('.section__content');

    if (pageSlideContent) {
      const pageSlideContentHeight = pageSlideContent.offsetHeight;
      if (pageSlideContentHeight > window.innerHeight) {
        wrapper.classList.add('_free');
        pageSlider.params.freeMode = true;
        break;
      }
    }
  }
}


pageSlider.init();
// wow.init();