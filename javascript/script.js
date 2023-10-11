/*============== CHANGE BACKGROUND HEADER ==============*/
const scrollHeader = () => {
    const header = document.querySelector('#header')
    //Quando a rolagem estiver maior que 50px altura da altura da janela de visualizacao, adicionar a classe scroll-header.
    this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*============== SHOW SCROLL UP ==============*/
const scrollUp = () => {
    const scrollUp = document.querySelector('#scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*============== SCROLL SECTIONS ACTIVE LINK ==============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {

    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*= ' + sectionId)

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*============== SCROLL REVEAL ANIMATION ==============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 40,
    //reset: true // Animation repeat
})

sr.reveal(`.home__data, .products__data, .steps__content, .footer__container`)
sr.reveal(`.home__img`, { origin: 'bottom' })
sr.reveal(`.products__card`, { interveal: 100 })
sr.reveal(`.about__img, .testimonial__img`, { origin: 'right' })
sr.reveal(`.about__data, testimonial__data`, { origin: 'left' })
