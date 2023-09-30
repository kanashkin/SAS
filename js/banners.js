let examplesSwiper = null

const createSwiper = () => {
    examplesSwiper = new Swiper('.swiper-examples', {
        slidesPerView: 1,
        navigation: {
            prevEl: '.swiper-left',
            nextEl: '.swiper-right'
        },
        pagination: {
            el: '.swiper-pagination'
        }
    })
}

const checkWidth = () => {
    if (window.innerWidth <= 576) {
        console.log(1);
        createSwiper()
    } else {
        if (examplesSwiper) {
            examplesSwiper.destroy()
        }
        examplesSwiper = null
    }
}

checkWidth()

window.addEventListener('resize', () => {
    checkWidth()
})