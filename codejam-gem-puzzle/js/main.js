import { setMatrixBtnsPosition } from './utils/btnPositioning.js';
import { state } from './utils/constants.js';
import {
	createElem,
	createElemsArray,
	generateBtnsCallback
} from './utils/createElements.js';
import { getMatrixFromArray } from './utils/matrix.js';

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
	callback: generateBtnsCallback,
	parent: table
});

export const tableBtnValues = tableBtns.map((el) => +el.dataset.matrixId);

export const btnMatrix = getMatrixFromArray(
	tableBtnValues,
	state.currentFrameSize
);

setMatrixBtnsPosition(btnMatrix, tableBtns);

export default mainContainer;
