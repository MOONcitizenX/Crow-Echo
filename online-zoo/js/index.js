import Swiper from './swiper.js';

const bamboo_hat = document.querySelector('.backstage_img');

const petsSwiper = new Swiper('.cards_slider', {
	slidesPerView: 3,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: '.swiper_button-next',
		prevEl: '.swiper_button-prev'
	}
});

const testimonialsSwiper = new Swiper('.testimonials_slider', {
	slidesPerView: 4,
	spaceBetween: 30,
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
		snapOnRelease: true,
		dragSize: 115
	}
});

const updateOnResize = () => {
	if (window.innerWidth > 1000) {
		bamboo_hat.src = '../img/bamboo-cap.jpg';
	} else if (window.innerWidth > 640) {
		bamboo_hat.src = '../img/bamboo-cap_1000.jpg';
	}
};

window.addEventListener('resize', updateOnResize);

const handleSubmit = (e) => {
	e.preventDefault();
};

const submit_form = document.querySelector('.submit_form');

submit_form.addEventListener('submit', handleSubmit);
