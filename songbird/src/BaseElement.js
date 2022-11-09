export class BaseElement {
	constructor({ tag = 'div', className = '', textContent = '', attr }) {
		this.children = [];
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
	addChildren(...element) {
		element.forEach((elem) => {
			if (elem instanceof HTMLElement) {
				this._elem.append(elem);
			}
			else {
				this._elem.append(elem.elem);
				this.children.push(elem);
			}
		});
	}
	destroy() {
		this.children.forEach((child) => child.destroy());
		this._elem.remove();
	}
}
