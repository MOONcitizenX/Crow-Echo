import { state } from './utils/constants.js';
import { createElem, createElemsArray } from './utils/createElements.js';
import { randomNum } from './utils/randomNum.js';

const mainContainer = createElem({
	tag: 'div',
	classN: 'main__container'
});

export const table = createElem({
	tag: 'div',
	classN: 'table',
	parent: mainContainer
});

export const tableBtns = createElemsArray({
	arraySize: state.currentFrameSize * state.currentFrameSize,
	callback: (el, ind) => {
		el = createElem({
			tag: 'button',
			classN: 'table__btn',
			txtContent: ind + 1
		});
		el.style.backgroundImage = `url("./assets/img/wood${randomNum(
			2,
			7
		)}.jpg")`;
		return el;
	},
	parent: table
});

export default mainContainer;
