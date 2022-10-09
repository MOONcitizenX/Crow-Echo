const petsCards = [
	{
		imgUrl: './img/slider/giant_panda.jpg',
		cardTitle: 'giant pandas',
		cardLocation: 'Native to Southwest China',
		cardIcon: './icons/banana-bamboo_icon.svg'
	},
	{
		imgUrl: './img/slider/eagle.jpg',
		cardTitle: 'eagles',
		cardLocation: 'Native to South America',
		cardIcon: './icons/meet-fish_icon.svg'
	},
	{
		imgUrl: './img/slider/gorilla.jpg',
		cardTitle: 'gorillas',
		cardLocation: 'Native to Congo',
		cardIcon: './icons/banana-bamboo_icon.svg'
	},
	{
		imgUrl: './img/slider/sloth.jpg',
		cardTitle: 'Two-toed Sloth',
		cardLocation: 'Mesoamerica, South America',
		cardIcon: './icons/banana-bamboo_icon.svg'
	},
	{
		imgUrl: './img/slider/cheetahs.jpg',
		cardTitle: 'cheetahs',
		cardLocation: 'Native to Africa',
		cardIcon: './icons/meet-fish_icon.svg'
	},
	{
		imgUrl: './img/slider/penguins.jpg',
		cardTitle: 'penguins',
		cardLocation: 'Native to Antarctica',
		cardIcon: './icons/meet-fish_icon.svg'
	},
	{
		imgUrl: './img/slider/alligatorz.jpg',
		cardTitle: 'alligators',
		cardLocation: 'Native to Southeastern U. S.',
		cardIcon: './icons/meet-fish_icon.svg'
	},
	{
		imgUrl: './img/slider/gorillaz.jpg',
		cardTitle: 'gorillas',
		cardLocation: 'Native to Congo',
		cardIcon: './icons/banana-bamboo_icon.svg'
	},
	{
		imgUrl: './img/slider/armadillo.jpg',
		cardTitle: 'Armadillo',
		cardLocation: 'Native to Americas',
		cardIcon: './icons/meet-fish_icon.svg'
	},
	{
		imgUrl: './img/slider/quokka.jpg',
		cardTitle: 'Quokkas',
		cardLocation: 'Native to Rottnest Island',
		cardIcon: './icons/banana-bamboo_icon.svg'
	},
	{
		imgUrl: './img/slider/red_panda.jpg',
		cardTitle: 'Red Panda',
		cardLocation: 'Native to Eastern Himalayas',
		cardIcon: './icons/meet-fish_icon.svg'
	},
	{
		imgUrl: './img/slider/tarsier.jpg',
		cardTitle: 'Tarsiers',
		cardLocation: 'Native to Oceania',
		cardIcon: './icons/banana-bamboo_icon.svg'
	}
];

const getRandomNum = (max, min = 0) => {
	max = max - 1;
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomCardsData = (len) => {
	const result = [];
	while (result.length < len) {
		const randomCard = petsCards[getRandomNum(petsCards.length)];
		if (result.filter((el) => el.imgUrl === randomCard.imgUrl).length > 0) {
			continue;
		} else {
			result.push(randomCard);
		}
	}
	return result;
};
