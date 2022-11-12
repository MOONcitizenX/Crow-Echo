export class BaseElement {
	constructor({ tag = 'div', className = '', textContent = '', attr }) {
		this._children = [];
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
	get children() {
		return this._children;
	}
	addChildren(...element) {
		element.forEach((elem) => {
			if (elem instanceof HTMLElement) {
				this._elem.append(elem);
			}
			else {
				this._elem.append(elem.elem);
				this._children.push(elem);
			}
		});
	}
	destroy() {
		this._children.forEach((child) => child.destroy());
		this._elem.remove();
	}
}
