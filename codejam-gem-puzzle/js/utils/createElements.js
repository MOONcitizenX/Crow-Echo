export const createElem = ({
	tag,
	classN,
	parent = '',
	attributes = '',
	inner = '',
	txtContent = ''
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
