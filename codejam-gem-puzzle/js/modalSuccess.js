import { state } from './utils/constants.js';
import { getTimeFromSeconds, stopTimer } from './utils/counter.js';
import { createElem } from './utils/createElements.js';
import {
	getLocalStorageItems,
	setLocalStorageItems
} from './utils/localStorage.js';

export const darkBGWin = createElem({
	tag: 'div',
	classN: 'darkBG'
});

export const modalWin = createElem({
	tag: 'div',
	classN: 'modal-window',
	parent: darkBGWin
});

const winMessage = createElem({
	tag: 'h2',
	classN: 'modal__grats',
	txtContent: 'Congratilations!',
	parent: modalWin
});

const winScoreMessage = createElem({
	tag: 'p',
	classN: 'modal__message',
	txtContent: `Your stats are:`,
	parent: modalWin
});

const winScore = createElem({
	tag: 'p',
	classN: 'modal__message',
	txtContent: `${state.moves} moves and ${getTimeFromSeconds()} minutes`,
	parent: modalWin
});

const winSaveMessage = createElem({
	tag: 'p',
	classN: 'modal__message-save',
	txtContent: `Enter your name to save the result`,
	parent: modalWin
});

const winForm = createElem({
	tag: 'form',
	classN: 'modal__form',
	parent: modalWin
});

const winNameInput = createElem({
	tag: 'input',
	classN: 'modal__name-input',
	attributes: {
		placeholder: 'Enter your name',
		required: 'true',
		maxlength: '18'
	},
	parent: winForm
});

const winSubmit = createElem({
	tag: 'button',
	classN: 'modal__submit',
	txtContent: `Submit`,
	attributes: {
		type: 'submit'
	},
	parent: winForm
});

const winSaveMessageSmall = createElem({
	tag: 'p',
	classN: 'modal__message-small',
	txtContent: `Hooray! You solved the puzzle in ${getTimeFromSeconds()} and ${
		state.moves
	} moves!`,
	parent: modalWin
});

winForm.addEventListener('submit', (e) => {
	e.preventDefault();
	if (getLocalStorageItems('topScoreList')) {
		const topList = getLocalStorageItems('topScoreList');
		const currentResult = {
			name: e.target[0].value,
			info: `${state.moves} moves, ${getTimeFromSeconds()} minutes`,
			value: state.moves / state.time
		};
		topList.push(currentResult);
		topList.sort((a, b) => a.value - b.value);
		setLocalStorageItems('topScoreList', topList.slice(0, 10));
		winNameInput.value = '';
	} else {
		const topList = [
			{
				name: e.target[0].value,
				info: `${state.moves} moves, ${getTimeFromSeconds()} minutes`,
				value: state.moves / state.time
			}
		];
		setLocalStorageItems('topScoreList', topList);
		winNameInput.value = '';
	}
	darkBGWin.classList.remove('darkBG--active');
	modalWin.classList.remove('modal-window--active');
	document.body.classList.remove('body-overflow');
});

export const showModalSuccess = () => {
	setTimeout(() => {
		document.body.classList.add('body-overflow');
		darkBGWin.classList.add('darkBG--active');
		modalWin.classList.add('modal-window--active');
		winScore.textContent = `${
			state.moves
		} moves and ${getTimeFromSeconds()} minutes`;
		stopTimer();
	}, 300);
};

darkBGWin.addEventListener('click', ({ target }) => {
	if (!target.closest('.modal-window')) {
		darkBGWin.classList.remove('darkBG--active');
		modalWin.classList.remove('modal-window--active');
		document.body.classList.remove('body-overflow');
	}
});
