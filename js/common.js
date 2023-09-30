const dropdownMenu = () => {
    const trigger = document.querySelector('.dropdown-trigger')
    const content = document.querySelector('.dropdown__menu')

    trigger.addEventListener('click', () => {
        content.classList.toggle('active')
    })
}

dropdownMenu()

const burgerMenu = () => {
    const openTrigger = document.querySelector('.burger')
    const closeTrigger = document.querySelector('.burger-menu-close ')
    const burgerMenu = document.querySelector('.burger-menu')

    openTrigger.addEventListener('click', () => {
        burgerMenu.classList.add('active')
    })

    closeTrigger.addEventListener('click', () => {
        burgerMenu.classList.remove('active')
    })
}

burgerMenu()