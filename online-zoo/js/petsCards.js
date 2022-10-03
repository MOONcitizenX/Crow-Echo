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
	}
];

const getRandomNum = (arrayLength) => Math.floor(Math.random() * arrayLength);

export const getRandomCards = (len) => {
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
