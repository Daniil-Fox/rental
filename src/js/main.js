import './_components.js';
import { modalSlider } from './components/sliders.js';


const faqItems = document.querySelectorAll('.faq__item')

faqItems.forEach(item => {
  const header = item.querySelector('.faq__header')
  const content = item.querySelector('.faq__content')

  header.addEventListener('click', e => {
    e.preventDefault()
    let isActive = header.classList.toggle('active')
    content.style.maxHeight = isActive ? content.scrollHeight + 'px' : null
  })
})


const modalButtons = document.querySelectorAll('.modal-btn')
const modal = document.querySelector('.modal')
const modalBody = modal.querySelector('.modal__body')
const modalClose = modal.querySelector('.modal__close')

modalButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault()
    modal.classList.add('active')
  })
})

modalClose.addEventListener('click', e => {
  e.preventDefault()
  modal.classList.remove('active')
})
modal.addEventListener('click', e => {
  modal.classList.remove('active')
})
modalBody.addEventListener('click', e => {
  e.stopPropagation()
})


const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.header__burger')
const menuItems = menu.querySelectorAll('.nav__link')
menuBtn.addEventListener('click', e => {
  menu.classList.toggle('active')
})

menuItems.forEach(link => {
  link.addEventListener('click', e => {
    menu.classList.remove('active')
  })
})

const header = document.querySelector('.header')
window.addEventListener('scroll', e => {
  if(window.scrollY > 0){
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})



const charsModalBtn = document.querySelectorAll('.modal-btn-chars')
const charsModal = document.querySelector('.modal-info')
const modalBodies = document.querySelectorAll('.modal-chars, .modal-price')
charsModalBtn.forEach((btn, idx) => {

  btn.addEventListener('click', e => {
    charsModal.classList.add('active')

    modalSlider.slideTo(idx)
  })


})
modalBodies.forEach(body => {
  body.addEventListener('click', e => {
    e.stopPropagation()
  })
})


charsModal.addEventListener('click', e => {
  charsModal.classList.remove('active')
})
