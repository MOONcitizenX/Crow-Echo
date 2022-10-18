export const createElem = ({
	tag,
	classN,
	parent = '',
	attributes = '',
	inner = '',
	txtContent = ''
}) => {
	const elem = document.createElement(tag);
	elem.className = classN;
	if (inner) elem.innerHtml = inner;
	if (txtContent) elem.textContent = txtContent;
	if (attributes) {
		for (let attr of attributes) {
			elem.setAttribute(attr, attributes[attr]);
		}
	}
	if (parent) parent.appendChild(elem);
	return elem;
};

const createElemsArray = ({ callback, parent = '' }) => {};
