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
