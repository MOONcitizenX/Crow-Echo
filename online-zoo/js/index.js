import Swiper from './swiper.js';

const petsSwiper = new Swiper('.cards_slider', {
	slidesPerView: 3,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: '.swiper_button-next',
		prevEl: '.swiper_button-prev'
	}
});
