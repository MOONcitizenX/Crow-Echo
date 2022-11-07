export class BaseElement {
	constructor({ tag = 'div', className = '', textContent = '', attr }) {
		this._elem = document.createElement(tag);
		this._elem.className = className;
		this._elem.textContent = textContent;
		if (attr) {
			Object.assign(this.elem, attr);
		}
	}
	get elem() {
		return this._elem;
	}
	destroy() {
		this._elem.remove();
	}
}
