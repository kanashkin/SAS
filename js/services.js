const servicesAnimation = () => {
    const triggers = document.querySelectorAll('.animation-trigger')
    const animationBlock = document.querySelector('.animation__block')

    triggers.forEach(item => {
        item.addEventListener('mouseenter', () => {
            let source
            if (item.classList.contains('development-trigger')) {
                source = 'img/services/services/development/bg.png'
            } else if (item.classList.contains('seo-trigger')) {
                source = 'img/services/services/seo/bg.png'
            } else if (item.classList.contains('design-trigger')) {
                source = 'img/services/services/design/bg.png'
            } else if (item.classList.contains('ppc-trigger')) {
                source = 'img/services/services/ppc/bg.png'
            }

            animationBlock.style.background = `url('${source}') center center / cover no-repeat`
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
        769: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }
})

servicesAnimation()
contextMenu()