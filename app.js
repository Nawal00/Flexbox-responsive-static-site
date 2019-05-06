document.addEventListener('DOMContentLoaded', () => {

  //burger nav bar toggle active
  const mainNav = document.querySelector('#js-menu')
  const navBarToggle = document.querySelector('#js-navbar-toggle')
  const activeNav = document.querySelector('.navbar')

  // toggle burger nav
  function toggleActive() {
    mainNav.classList.toggle('burgerActive')
  }

  navBarToggle.addEventListener('click', toggleActive)

  // add black to navbar class when user scroll down
  window.addEventListener('scroll', () =>{
    const wScroll = window.scrollY
    wScroll >= 125 ?
      activeNav.classList.add('black') : activeNav.classList.remove('black')
  })


  // external js: flickity.pkgd.js - Carousel

  const carousel = document.querySelector('.carousel')
  const flkty = new Flickity( carousel, {
    imagesLoaded: true,
    percentPosition: false,
    initialIndex: 2
  })

  const imgs = carousel.querySelectorAll('.carousel-cell img')
  // get transform property
  const docStyle = document.documentElement.style
  const transformProp = typeof docStyle.transform === 'string' ?
    'transform' : 'WebkitTransform'

  flkty.on( 'scroll', () => {
    flkty.slides.forEach( ( slide, i ) => {
      const img = imgs[i]
      const x = ( slide.target + flkty.x ) * -1/3
      img.style[ transformProp ] = 'translateX(' + x  + 'px)'
    })
  })


})
