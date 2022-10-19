import { mainWrapper } from './main.js';
import { createElem } from './utils/createElements.js';

export const wrapper = createElem({
	tag: 'div',
	classN: 'wrapper'
});

export const emptyWrapper = createElem({
	tag: 'div',
	classN: 'empty__wrapper',
	parent: wrapper
});

wrapper.appendChild(mainWrapper);

const headerWrapper = createElem({
	tag: 'div',
	classN: 'header__wrapper',
	parent: wrapper
});

const headerContainer = createElem({
	tag: 'div',
	classN: 'header__container',
	parent: headerWrapper
});

const h1 = createElem({
	tag: 'h1',
	classN: 'header__title',
	txtContent: 'Gem Puzzle Game',
	parent: headerContainer
});

export default wrapper;
