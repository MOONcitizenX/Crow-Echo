import { getRandomCardsData } from './petsCards.js';
import Swiper from './swiper.js';

const prev = document.querySelector('.swiper_button-prev');
const next = document.querySelector('.swiper_button-next');

let sliderLength = window.innerWidth >= 1000 ? 6 : 4;

window.addEventListener('resize', () => {
	sliderLength = window.innerWidth >= 1000 ? 6 : 4;
	const slides = [
		...getRandomCards(),
		...getRandomCards(),
		...getRandomCards()
	];
	petsSwiper.virtual.removeAllSlides();
	petsSwiper.virtual.appendSlide(slides);
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
	initialSlide: 3,
	watchSlidesProgress: true,
	preventInteractionOnTransition: true,
	speed: 800,
	virtual: {
		slides: (() => {
			const slides = [];
			for (let i = 0; i < 3; i++) {
				const data = getRandomCardsData(sliderLength);
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

const getRandomCards = () => {
	const slides = [];
	const data = getRandomCardsData(sliderLength);
	slides.push(createSlide(data.slice(0, 2)));
	slides.push(createSlide(data.slice(2, 4)));
	if (sliderLength === 6) {
		slides.push(createSlide(data.slice(4)));
	}
	return slides;
};

const nextCallback = () => {
	const slides = [
		...getRandomCards(),
		...petsSwiper.virtual.slides.slice(
			petsSwiper.activeIndex,
			petsSwiper.activeIndex + (sliderLength === 6 ? 3 : 2)
		),
		...getRandomCards()
	];
	petsSwiper.virtual.removeAllSlides();
	petsSwiper.virtual.appendSlide(slides);
	nextSliderOff();
	petsSwiper.slideNext(0, false);
	prev.removeAttribute('disabled');
	next.removeAttribute('disabled');
	next.addEventListener('click', nextSliderOn);
	prev.addEventListener('click', prevSliderOn);
};

const prevCallback = () => {
	const slides = [
		...getRandomCards(),
		...petsSwiper.virtual.slides.slice(
			petsSwiper.activeIndex,
			petsSwiper.activeIndex + (sliderLength === 6 ? 3 : 2)
		),
		...getRandomCards()
	];
	petsSwiper.virtual.removeAllSlides();
	petsSwiper.virtual.appendSlide(slides);
	petsSwiper.slideNext(0, false);
	prevSliderOff();
	prev.removeAttribute('disabled');
	next.removeAttribute('disabled');
	prev.addEventListener('click', prevSliderOn);
	next.addEventListener('click', nextSliderOn);
};

const nextSliderOn = () => {
	next.removeEventListener('click', nextSliderOn);
	prev.removeEventListener('click', prevSliderOn);
	petsSwiper.on('slideNextTransitionEnd', nextCallback);
};
const nextSliderOff = () => {
	petsSwiper.off('slideNextTransitionEnd', nextCallback);
};

const prevSliderOn = () => {
	prev.removeEventListener('click', prevSliderOn);
	next.removeEventListener('click', nextSliderOn);
	petsSwiper.on('slidePrevTransitionEnd', prevCallback);
};
const prevSliderOff = () => {
	petsSwiper.off('slidePrevTransitionEnd', prevCallback);
};

next.addEventListener('click', nextSliderOn);
prev.addEventListener('click', prevSliderOn);
