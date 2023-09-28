const dropdownMenu = () => {
    const trigger = document.querySelector('.dropdown-trigger')
    const content = document.querySelector('.dropdown__menu')

    trigger.addEventListener('click', () => {
        content.classList.toggle('active')
    })
}

dropdownMenu()