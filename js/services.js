const servicesAnimation = () => {
    const triggers = document.querySelectorAll('.animation-trigger')
    const animationBlock = document.querySelector('.animation__block')

    triggers.forEach(item => {
        item.addEventListener('mouseenter', () => {
            let folder
            if (item.classList.contains('development-trigger')) {
                folder = 'development'
            } else if (item.classList.contains('seo-trigger')) {
                folder = 'seo'
            } else if (item.classList.contains('design-trigger')) {
                folder = 'design'
            } else if (item.classList.contains('ppc-trigger')) {
                folder = 'ppc'
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

servicesAnimation()
contextMenu()