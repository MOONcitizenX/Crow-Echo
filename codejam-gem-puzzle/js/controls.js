import { createElem } from './utils/createElements.js';

const controlButtonsArray = ['Shuffle and start', 'Pause', 'Save', 'Top score'];
const frameSizeSelect = ['3x3', '4x4', '5x5', '6x6', '7x7', '8x8'];

const controlsContainer = createElem({
	tag: 'div',
	classN: 'controls-container'
});

const controlsSelect = createElem({
	tag: 'select',
	classN: 'controls__select',
	attributes: {
		name: 'frameSizeSelect'
	}
});

export default controlsContainer;
