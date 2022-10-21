import controlsContainer, {
	controlsContainerBottom,
	counterContainer,
	startNewGame
} from './controls.js';
import { showModalSuccess } from './modalSuccess.js';
import { setMatrixBtnsPosition } from './utils/btnPositioning.js';
import { state } from './utils/constants.js';
import { countMoves } from './utils/counter.js';
import {
	createElem,
	createElemsArray,
	generateBtnsCallback
} from './utils/createElements.js';
import {
	checkIsValidToSwap,
	findItemCoords,
	getMatrixFromArray,
	isSuccess,
	swapItems
} from './utils/matrix.js';

export const mainWrapper = createElem({
	tag: 'div',
	classN: 'main__wrapper'
});

export const wrapper = createElem({
	tag: 'div',
	classN: 'wrapper'
});

wrapper.appendChild(mainWrapper);

mainWrapper.appendChild(counterContainer);
mainWrapper.appendChild(controlsContainer);
mainWrapper.appendChild(controlsContainerBottom);

const mainContainer = createElem({
	tag: 'div',
	classN: 'main__container',
	parent: mainWrapper
});

export const table = createElem({
	tag: 'div',
	classN: 'table',
	parent: mainContainer
});

export const tableBtns = {
	value: createElemsArray({
		arraySize: state.currentFrameSize * state.currentFrameSize,
		callback: generateBtnsCallback,
		parent: table
	})
};

export const tableBtnValues = {
	value: tableBtns.value.map((el) => +el.dataset.matrixId)
};

export const btnMatrix = {
	value: getMatrixFromArray(tableBtnValues.value, state.currentFrameSize)
};

const clickAudio = new Audio('assets/sounds/click.mp3');

setMatrixBtnsPosition(btnMatrix.value, tableBtns.value);

table.addEventListener('click', ({ target }) => {
	const clickedBtn = target.closest('.table__btn');
	if (!clickedBtn) return;

	const clickedBtnCoords = findItemCoords(
		clickedBtn.dataset.matrixId,
		btnMatrix.value
	);
	const blankBtnCoords = findItemCoords(
		state.blankTableItem,
		btnMatrix.value
	);

	const isValidToSwap = checkIsValidToSwap(clickedBtnCoords, blankBtnCoords);
	if (isValidToSwap) {
		swapItems(clickedBtnCoords, blankBtnCoords, btnMatrix.value);
		setMatrixBtnsPosition(btnMatrix.value, tableBtns.value);
		countMoves();
		state.currentMatrix = btnMatrix.value;
		if (state.isSoundOn) clickAudio.play();
		if (isSuccess(btnMatrix.value)) {
			showModalSuccess();
		}
	}
});
startNewGame();

export default mainContainer;
