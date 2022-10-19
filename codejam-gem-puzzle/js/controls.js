import { btnMatrix, table, tableBtns, tableBtnValues } from './main.js';
import { setMatrixBtnsPosition } from './utils/btnPositioning.js';
import { state } from './utils/constants.js';
import {
	createElem,
	createElemsArray,
	generateBtnsCallback,
	generateNewTable
} from './utils/createElements.js';
import { getMatrixFromArray } from './utils/matrix.js';

const controlButtonsArray = ['New game', 'Pause', 'Save', 'Top score'];
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
	if (+target.value !== state.currentFrameSize) {
		state.currentFrameSize = +target.value;
		generateNewTable();
	}
});

const [controlsNewGame, controlsPause, controlsSave, controlsTopScore] =
	createElemsArray({
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

controlsNewGame.addEventListener('click', () => {
	generateNewTable();
});
controlsPause.addEventListener('click', () => {});
controlsSave.addEventListener('click', () => {});
controlsTopScore.addEventListener('click', () => {});

export default controlsContainer;
