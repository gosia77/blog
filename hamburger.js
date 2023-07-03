const hamburger = document.querySelector('.nav--hamburger')
const menu = document.querySelector('.nav--menu')
const line1 = document.querySelector('.hamburger--line1')
const line2 = document.querySelector('.hamburger--line2')
const line3 = document.querySelector('.hamburger--line3')

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

if (vw < 1024) {
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('nav--menu-active')
  
    line1.classList.toggle('hamburger--line1-active')
    line2.classList.toggle('hamburger--line2-active')
    line3.classList.toggle('hamburger--line3-active')
  })
}
