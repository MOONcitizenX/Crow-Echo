import { burger } from './burgerMenu.js';
import Swiper from './swiper.js';
import {
	showPopup,
	createSliderCards,
	popupListenerClose
} from './testiPopup.js';

const bamboo_hat = document.getElementById('backstage_img');

const testimonialsSwiper = new Swiper('.testimonials_slider', {
	slidesPerView: 4,
	spaceBetween: 30,
	allowTouchMove: false,
	virtual: {
		slides: (() => {
			return createSliderCards(11);
		})()
	},

	speed: 800,
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
		snapOnRelease: true,
		dragSize: 115
	},
	breakpoints: {
		1200: {
			slidesPerView: 4,
			spaceBetween: 30,
			direction: 'horizontal'
		},
		641: {
			slidesPerView: 3,
			direction: 'horizontal',
			spaceBetween: 30,
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
				snapOnRelease: true,
				dragSize: 75
			}
		},
		320: {
			slidesPerView: 3,
			direction: 'vertical',
			spaceBetween: 10
		}
	}
});

testimonialsSwiper.slides.forEach((el) =>
	el.addEventListener('click', (e) => {
		console.log(e.target.closest('.testi_card').id);
		showPopup(e.target.closest('.testi_card').id);
	})
);

const updateOnResize = () => {
	if (window.innerWidth > 1200) {
		bamboo_hat.src = './img/bamboo-cap.jpg';
	} else if (window.innerWidth > 640) {
		bamboo_hat.src = './img/bamboo-cap_1000.jpg';
	}
};

window.addEventListener('resize', updateOnResize);

const handleSubmit = (e) => {
	e.preventDefault();
};

const submit_form = document.querySelector('.submit_form');

submit_form.addEventListener('submit', handleSubmit);

burger();
popupListenerClose();
