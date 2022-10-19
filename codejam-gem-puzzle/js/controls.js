import { btnMatrix, table, tableBtns, tableBtnValues } from './main.js';
import { setMatrixBtnsPosition } from './utils/btnPositioning.js';
import { state } from './utils/constants.js';
import { startTimer } from './utils/counter.js';
import {
	createElem,
	createElemsArray,
	generateBtnsCallback,
	generateNewTable
} from './utils/createElements.js';
import { getMatrixFromArray } from './utils/matrix.js';

const controlButtonsArray = ['New game', 'Save', 'Top score', ''];
const frameSizeSelect = ['3x3', '4x4', '5x5', '6x6', '7x7', '8x8'];

export const counterContainer = createElem({
	tag: 'div',
	classN: 'counter__container'
});
const counterTime = createElem({
	tag: 'div',
	classN: 'counter__container--time',
	parent: counterContainer,
	txtContent: 'Time: 00:00'
});
const counterMoves = createElem({
	tag: 'div',
	classN: 'counter__container--moves',
	parent: counterContainer,
	txtContent: 'Moves: 0'
});

export const controlsContainer = createElem({
	tag: 'div',
	classN: 'controls__container'
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
		if (state.isSoundOn) shuffleAudio.play();
		generateNewTable();
	}
});

const [controlsNewGame, controlsSave, controlsTopScore, controlsSound] =
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

const soundIcon = createElem({
	tag: 'img',
	classN: 'sound__img',
	parent: controlsSound,
	attributes: {
		width: '20px',
		height: '20px',
		src: './assets/img/vol_max.svg'
	}
});

const rollingChunk = createElem({
	tag: 'div',
	classN: 'controls__rolling',
	txtContent: ':)',
	parent: controlsContainer
});

const shuffleAudio = new Audio('assets/sounds/shuffle.mp3');
controlsNewGame.addEventListener('click', () => {
	if (state.isSoundOn) shuffleAudio.play();
	generateNewTable();
	startTimer();
});
controlsSave.addEventListener('click', () => {});
controlsTopScore.addEventListener('click', () => {});
controlsSound.addEventListener('click', () => {
	state.isSoundOn = !state.isSoundOn;
	if (state.isSoundOn) {
		soundIcon.src = './assets/img/vol_max.svg';
	} else {
		soundIcon.src = './assets/img/vol_muted.svg';
	}
});

export default controlsContainer;
