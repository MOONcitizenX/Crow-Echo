import { state } from './utils/constants.js';
import { createElem } from './utils/createElements.js';

export const darkBGscore = createElem({
	tag: 'div',
	classN: 'darkBG'
});

export const modalScore = createElem({
	tag: 'div',
	classN: 'modal-window',
	parent: darkBGscore
});

export const showPopup = (id) => {
	darkBg.classList.add('dark-wrapper--active');
	document.body.classList.add('body-overflow');
	createPopupCard(cardsListData.filter((el) => el.id === id)[0]);
};

darkBGscore.addEventListener('click', ({ target }) => {
	if (!target.closest('.modal-window')) {
		darkBGscore.classList.remove('darkBG--active');
		modalScore.classList.remove('modal-window--active');
		document.body.classList.remove('body-overflow');
	}
});
