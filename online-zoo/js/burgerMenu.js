const darkWrapper = document.getElementById('darkWrapper');
const burgerButton = document.getElementById('burgerButton');
const burgerMenu = document.getElementById('burgerMenu');
const body = document.body;

export const showDarkBg = () => {
	darkWrapper.classList.add('dark-wrapper--active');
};

export const hideDarkBg = () => {
	darkWrapper.classList.remove('dark-wrapper--active');
};

const handlerBurgerMenu = () => {
	body.classList.toggle('body-overflow');
	burgerMenu.classList.contains('burger-active')
		? hideDarkBg()
		: showDarkBg();
	burgerMenu.classList.toggle('burger-active');

	[...burgerButton.children].forEach((el, ind) => {
		if (ind === 1) {
			el.style.backgroundColor === 'black' ? 'transparent' : 'white';
		} else {
			el.style.backgroundColor =
				el.style.backgroundColor === 'black' ? 'white' : 'black';
		}
		if (ind === 0) {
			el.style.transform =
				el.style.transform === ''
					? 'rotate(45deg) translate(6px, 5px)'
					: '';
		}
		if (ind === 2) {
			el.style.transform =
				el.style.transform === 'rotate(-45deg)'
					? 'rotate(0deg)'
					: 'rotate(-45deg)';
		}
	});
};

export const burger = () => {
	[...document.getElementsByClassName('burger-nav_link')].forEach((el) =>
		el.addEventListener('click', handlerBurgerMenu)
	);
	darkWrapper.addEventListener('click', handlerBurgerMenu);
	burgerButton.addEventListener('click', handlerBurgerMenu);
};
