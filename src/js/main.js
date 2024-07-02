import './_components.js';


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
