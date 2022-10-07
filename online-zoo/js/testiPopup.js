const cardsList = [
	document.getElementById('testi-card1'),
	document.getElementById('testi-card2'),
	document.getElementById('testi-card3')
];
const darkBg = document.getElementById('darkWrapper1');

const cardsListData = [
	{
		id: 'testi-card1',
		src: './icons/testimonials/user_icon.svg',
		name: 'Michael John',
		local: 'Local Austria &bull; Today',
		textContent:
			'The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.\n The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
	},
	{
		id: 'testi-card2',
		src: './icons/testimonials/oscar.png',
		name: 'Oskar Samborsky',
		local: 'Local Austria &bull; Yesterday',
		textContent:
			'Online zoo is one jf the ways to instill a love for animals.The best online zoo I&rsquo;ve met. My son delighted very  much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for  animals.The best online zoo I&rsquo;ve met. \n My son delighted very much ljves to watch gouillas. The best online zoo I&rsquo;ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I&rsquo;ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
	},
	{
		id: 'testi-card3',
		src: './icons/testimonials/frederica.png',
		name: 'Fredericka Michelin',
		local: 'Local Austria &bull; Yesterday',
		textContent:
			' The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. \n The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
	},
	{
		id: 'testi-card4',
		src: './icons/testimonials/user_icon.svg',
		name: 'Michael John',
		local: 'Local Austria &bull; Today',
		textContent:
			'The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.\n The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
	},
	{
		id: 'testi-card5',
		src: './icons/testimonials/oscar.png',
		name: 'Oskar Samborsky',
		local: 'Local Austria &bull; Yesterday',
		textContent:
			'Online zoo is one jf the ways to instill a love for animals.The best online zoo I&rsquo;ve met. My son delighted very  much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for  animals.The best online zoo I&rsquo;ve met. \n My son delighted very much ljves to watch gouillas. The best online zoo I&rsquo;ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I&rsquo;ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
	},
	{
		id: 'testi-card6',
		src: './icons/testimonials/frederica.png',
		name: 'Fredericka Michelin',
		local: 'Local Austria &bull; Yesterday',
		textContent:
			' The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. \n The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
	},
	{
		id: 'testi-card7',
		src: './icons/testimonials/user_icon.svg',
		name: 'Michael John',
		local: 'Local Austria &bull; Today',
		textContent:
			'The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.\n The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
	},
	{
		id: 'testi-card8',
		src: './icons/testimonials/oscar.png',
		name: 'Oskar Samborsky',
		local: 'Local Austria &bull; Yesterday',
		textContent:
			'Online zoo is one jf the ways to instill a love for animals.The best online zoo I&rsquo;ve met. My son delighted very  much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for  animals.The best online zoo I&rsquo;ve met. \n My son delighted very much ljves to watch gouillas. The best online zoo I&rsquo;ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I&rsquo;ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
	},
	{
		id: 'testi-card9',
		src: './icons/testimonials/frederica.png',
		name: 'Fredericka Michelin',
		local: 'Local Austria &bull; Yesterday',
		textContent:
			' The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. \n The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
	},
	{
		id: 'testi-card10',
		src: './icons/testimonials/oscar.png',
		name: 'Oskar Samborsky',
		local: 'Local Austria &bull; Yesterday',
		textContent:
			'Online zoo is one jf the ways to instill a love for animals.The best online zoo I&rsquo;ve met. My son delighted very  much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for  animals.The best online zoo I&rsquo;ve met. \n My son delighted very much ljves to watch gouillas. The best online zoo I&rsquo;ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I&rsquo;ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
	},
	{
		id: 'testi-card11',
		src: './icons/testimonials/frederica.png',
		name: 'Fredericka Michelin',
		local: 'Local Austria &bull; Yesterday',
		textContent:
			' The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. \n The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.'
	}
];

const createNewElem = ({
	tag,
	classN,
	src = '',
	textContent = '',
	parent = ''
}) => {
	const elem = document.createElement(tag);
	elem.className = classN;
	if (src) {
		elem.src = src;
	}
	if (textContent) {
		elem.textContent = textContent;
	}
	if (parent) {
		parent.append(elem);
	}

	return elem;
};

export const createSliderCards = (num) => {
	const cardsForSlider = [];
	console.log(cardsForSlider);

	for (let i = 0; i < num; i++) {
		cardsForSlider.push(createSliderCard(cardsListData[i]));
	}

	return cardsForSlider;
};

const createSliderCard = ({ src, name, local, textContent, id }) => {
	return `<div class="swiper-slide testi_slide">
	<div class="testi_card" id="${id}"">
		<div class="card_top">
			<img
				src=${src}
				alt="user"
				class="testi_card_img"
			/>
			<div class="card_info">
				<h3 class="card_name">
					${name}
				</h3>
				<p class="card_local">
					${local}
				</p>
			</div>
		</div>
		<p class="card_descr">
			${textContent}
		</p>
	</div>
</div>
    `;
};

const createPopupCard = ({ src, name, local, textContent }) => {
	const card = createNewElem({
		tag: 'div',
		classN: 'popup_card',
		parent: darkBg
	});

	const cardTop = createNewElem({
		tag: 'div',
		classN: 'popup_top',
		parent: card
	});
	const cardCrossContainer = createNewElem({
		tag: 'div',
		classN: 'popup_cross-cont',
		parent: cardTop
	});

	const cardCross = createNewElem({
		tag: 'img',
		classN: 'popup_cross',
		parent: cardCrossContainer,
		src: './icons/x_icon.svg'
	});

	const img = createNewElem({
		tag: 'img',
		classN: 'popup_card_img',
		src: src,
		parent: cardTop
	});

	const cardInfo = createNewElem({
		tag: 'div',
		classN: 'popup_info',
		parent: cardTop
	});

	const cardName = createNewElem({
		tag: 'div',
		classN: 'popup_name',
		parent: cardInfo,
		textContent: name
	});

	const cardLocal = createNewElem({
		tag: 'p',
		classN: 'popup_local',
		parent: cardInfo,
		textContent: local
	});

	const cardText = createNewElem({
		tag: 'p',
		classN: 'popup_descr',
		parent: card,
		textContent: textContent
	});
};

export const showPopup = (id) => {
	darkBg.classList.add('dark-wrapper--active');
	document.body.classList.add('body-overflow');
	createPopupCard(cardsListData.filter((el) => el.id === id)[0]);
};

export const popupListenerClose = () => {
	darkBg.addEventListener('click', (e) => {
		if (
			!e.target.closest('.popup_card') ||
			e.target.closest('.popup_cross-cont')
		) {
			darkBg.classList.remove('dark-wrapper--active');
			darkBg.removeChild(darkBg.firstChild);
			document.body.classList.remove('body-overflow');
		}
	});
};
