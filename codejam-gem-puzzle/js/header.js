import { createElem } from './utils/createElements.js';

const header = createElem({
	tag: 'div',
	classN: 'header-container'
});

const h1 = createElem({
	tag: 'h1',
	classN: 'header__title',
	txtContent: 'Gem Puzzle Game',
	parent: header
});

const rollingChunk = createElem({
	tag: 'div',
	classN: 'header__rolling',
	txtContent: '16',
	parent: header
});
export default header;
