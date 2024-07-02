import { Swiper } from "swiper";
import { FreeMode, Autoplay, EffectFade, Navigation, Grid } from "swiper/modules";

Swiper.use([FreeMode, Autoplay, EffectFade, Navigation, Grid])
const techSlider = new Swiper('.tech__slider', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  centeredSlides: true
})

// const techWrapper = new Swiper('.tech__images', {
//   slidesPerView: 1,
//   effect: 'fade',
//   fadeEffect: {
//     crossFade: true
//   }
// })


// techSlider.on('slideChange', swiper => {
//   techWrapper.slideTo(swiper.activeIndex)
// })

const modalSlider = new Swiper('.modal-info__slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30
})




const pointsSlider = new Swiper('.points__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 500,
  autoplay : {
    delay: 5000
  }
})

const roadsButtons = document.querySelectorAll('.roads-btn')

const roadsSlider = new Swiper('.roads__slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    prevEl: '.roads__arr--prev',
    nextEl: '.roads__arr--next',
  }
})


const rButtonslider = new Swiper('.roads__wrapper', {
  slidesPerView: 2,
  grid: {
    fill: 'row',
    rows: 2,
  },
  freeMode: true,
  spaceBetween: 10
})

roadsSlider.on('slideChange', swiper => {
  clearButtons()
  roadsButtons[swiper.activeIndex].classList.add('active')
})

roadsButtons.forEach((el, index) => {
  el.addEventListener('click', e => {
    e.preventDefault()
    clearButtons()
    el.classList.add('active')

    roadsSlider.slideTo(index)
  })
})
function clearButtons(){
  roadsButtons.forEach(btn => {
    btn.classList.remove('active')
  })
}


const rNextBtn = document.querySelector('.roads__btn--next')
rNextBtn.addEventListener('click', e => {
  e.preventDefault()

  roadsSlider.slideNext()
})
export {pointsSlider, modalSlider}
