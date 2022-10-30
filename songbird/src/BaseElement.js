export class BaseElement {
    constructor({ tag = 'div', className = '', textContent = '' }) {
        this._elem = document.createElement(tag);
        this._elem.className = className;
        this._elem.textContent = textContent;
    }
    get elem() {
        return this._elem;
    }
}
