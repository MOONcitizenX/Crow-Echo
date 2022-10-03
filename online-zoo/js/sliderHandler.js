import { getRandomCards } from './petsCards.js';
import Swiper from './swiper.js';

let sliderLength = window.innerWidth >= 1000 ? 6 : 4;

window.addEventListener('resize', () => {
	sliderLength = window.innerWidth >= 1000 ? 6 : 4;
});

const createSlide = (data) => {
	return `<div class="swiper-slide pets-swiper-slide">
		<div class="slide_card">
			<img
				src=${data[0].imgUrl}
				alt=${data[0].cardTitle}
				class="card_img"
			/>
			<div class="card_desc">
				<div class="card_text">
					<h4 class="card_title">${data[0].cardTitle}</h4>
					<p class="card_location">${data[0].cardLocation}</p>
				</div>
				<img
					src=${data[0].cardIcon}
					alt="banana bamboo"
					class="card_icon"
				/>
			</div>
		</div>
		<div class="slide_card">
			<img
				src=${data[1].imgUrl}
				alt=${data[1].cardTitle}
				class="card_img"
			/>
			<div class="card_desc">
				<div class="card_text">
					<h4 class="card_title">${data[1].cardTitle}</h4>
					<p class="card_location">${data[1].cardLocation}</p>
				</div>
				<img
					src=${data[1].cardIcon}
					alt="banana bamboo"
					class="card_icon"
				/>
			</div>
		</div>
	</div>`;
};
const petsSwiper = new Swiper('.cards_slider', {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 3,
	allowTouchMove: false,
	initialSlide: 120,
	preventInteractionOnTransition: true,

	speed: 800,
	virtual: {
		slides: (() => {
			const slides = [];
			for (let i = 0; i < 240; i++) {
				const data = getRandomCards(sliderLength);
				slides.push(createSlide(data.slice(0, 2)));
				slides.push(createSlide(data.slice(2, 4)));
				if (sliderLength === 6) {
					slides.push(createSlide(data.slice(4)));
				}
			}
			return slides;
		})()
	},
	navigation: {
		nextEl: '.swiper_button-next',
		prevEl: '.swiper_button-prev'
	},
	breakpoints: {
		1000: {
			slidesPerView: 3,
			slidesPerGroup: 3
		},
		320: {
			slidesPerView: 2,
			slidesPerGroup: 2
		}
	}
});
