import { state } from './utils/constants.js';
import { createElem, createElemsArray } from './utils/createElements.js';

const controlButtonsArray = ['Shuffle and start', 'Pause', 'Save', 'Top score'];
const frameSizeSelect = ['3x3', '4x4', '5x5', '6x6', '7x7', '8x8'];

const controlsContainer = createElem({
	tag: 'div',
	classN: 'controls-container'
});

const controlsSelectContainer = createElem({
	tag: 'div',
	classN: 'select-wrapper',
	parent: controlsContainer
});

const controlsSelect = createElem({
	tag: 'select',
	attributes: {
		name: 'frameSizeSelect'
	},
	parent: controlsSelectContainer
});

const controlsSelectOptions = createElemsArray({
	arraySize: frameSizeSelect.length,
	callback: (el, ind) => {
		el = createElem({
			tag: 'option',
			attributes: {
				value: ind + 3
			},
			txtContent: frameSizeSelect[ind]
		});
		if (ind === 1) el.selected = true;
		return el;
	},
	parent: controlsSelect
});

controlsSelect.addEventListener('change', ({ target }) => {
	if (target.value !== state.currentFrameSize) {
		// draw cubes
	}
});

const controlBtns = createElemsArray({
	arraySize: controlButtonsArray.length,
	callback: (el, ind) => {
		el = createElem({
			tag: 'button',
			classN: 'controls__btn',
			txtContent: controlButtonsArray[ind]
		});
		return el;
	},
	parent: controlsContainer
});

export default controlsContainer;
