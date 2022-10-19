import { state } from './constants.js';
import { randomNum } from './randomizer.js';

export const createElem = ({
	tag,
	classN,
	parent = '',
	attributes = '',
	inner = '',
	txtContent = '',
	data = ''
}) => {
	const elem = document.createElement(tag);
	if (classN) elem.className = classN;
	if (inner) elem.innerHtml = inner;
	if (txtContent) elem.textContent = txtContent;
	if (attributes) {
		for (let attr in attributes) {
			elem.setAttribute(attr, attributes[attr]);
		}
	}
	if (data) {
		for (let attr in data) {
			elem.dataset[attr] = data[attr];
		}
	}
	if (parent) parent.appendChild(elem);
	return elem;
};

export const createElemsArray = ({ arraySize, callback, parent = '' }) => {
	const array = [...Array(arraySize)].map(callback);
	if (parent) {
		for (let elem of array) {
			parent.appendChild(elem);
		}
	}
	return array;
};

export const generateBtnsCallback = (el, ind, arr) => {
	el = createElem({
		tag: 'button',
		classN: 'table__btn',
		txtContent: ind + 1,
		data: {
			matrixId: ind + 1
		},
		attributes: {
			style: `width:${100 / state.currentFrameSize}%; height:${
				100 / state.currentFrameSize
			}%; background-image:url("./assets/img/wood${randomNum(2, 7)}.jpg")`
		}
	});
	if (ind === arr.length - 1) el.style.display = 'none';
	return el;
};
