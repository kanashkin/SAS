const servicesAnimation = () => {
    const triggers = document.querySelectorAll('.animation-trigger')
    const animationBlock = document.querySelector('.animation__block')

    triggers.forEach(item => {
        item.addEventListener('mouseenter', () => {
            let folder
            if (item.classList.contains('development-trigger')) {
                folder = 'services/development'
            } else if (item.classList.contains('seo-trigger')) {
                folder = 'services/seo'
            } else if (item.classList.contains('design-trigger')) {
                folder = 'services/design'
            } else if (item.classList.contains('ppc-trigger')) {
                folder = 'services/ppc'
            }

            animationBlock.style.background = `url('../img/services/${folder}/bg.png') center center / cover no-repeat`
        })

        item.addEventListener('mouseleave', () => {
            animationBlock.style.background = ''
        })
    })
}

const contextMenu = () => {
    const triggers = document.querySelectorAll('.services-card')

    triggers.forEach(item => {
        item.addEventListener('click', () => {
            const menu = item.nextElementSibling
            const arrow = item.querySelector('.services-card__arrow')
            menu.classList.toggle('active')
            arrow.classList.toggle('active')
        })
    })
}

const additionalySwiper = new Swiper('.swiper-additionaly', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        prevEl: '.swiper-left',
        nextEl: '.swiper-right'
    },
    pagination: {
        clickable: true,
        el: '.swiper-pagination'
    },
    breakpoints: {
        577: {
            slidesPerView: 3
        }
    }
})

servicesAnimation()
contextMenu()