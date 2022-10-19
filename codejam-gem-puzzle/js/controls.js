import { btnMatrix, table, tableBtns, tableBtnValues } from './main.js';
import { setMatrixBtnsPosition } from './utils/btnPositioning.js';
import { state } from './utils/constants.js';
import {
	createElem,
	createElemsArray,
	generateBtnsCallback
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
		table.innerHTML = '';
		tableBtns.splice(0);
		tableBtns.push(
			...createElemsArray({
				arraySize: state.currentFrameSize * state.currentFrameSize,
				callback: generateBtnsCallback,
				parent: table
			})
		);
		tableBtnValues.splice(0);
		tableBtnValues.push(...tableBtns.map((el) => +el.dataset.matrixId));
		btnMatrix.splice(0);
		btnMatrix.push(
			...getMatrixFromArray(tableBtnValues, state.currentFrameSize)
		);
		setMatrixBtnsPosition(btnMatrix, tableBtns);
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

const controlsNewGame = controlBtns[0];
const controlsPause = controlBtns[1];
const controlsSave = controlBtns[2];
const controlsTopScore = controlBtns[3];

controlsNewGame.addEventListener('click', () => {});
controlsPause.addEventListener('click', () => {});
controlsSave.addEventListener('click', () => {});
controlsTopScore.addEventListener('click', () => {});

export default controlsContainer;
