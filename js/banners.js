let examplesSwiper = null
const swiperSlides = document.querySelectorAll('.examples__banner')

const createSwiper = () => {
    swiperSlides.forEach(item => {
        item.classList.add('swiper-slide')
    })


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
        createSwiper()
    } else {
        if (examplesSwiper) {
            examplesSwiper.destroy()
        }
        swiperSlides.forEach(item => {
            item.classList.remove('swiper-slide')
        })
        examplesSwiper = null
    }
}

checkWidth()

window.addEventListener('resize', () => {
    checkWidth()
})