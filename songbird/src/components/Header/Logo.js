import { BaseElement } from '../../BaseElement';

export class Logo extends BaseElement {
	constructor() {
		super({
			tag: 'h1',
			className: 'header__logo',
			attr: {
				onclick: () => {
					window.location.href = '#home';
				}
			}
		});
		this.spanCrow = new BaseElement({
			tag: 'span',
			className: 'header__logo_crow',
			textContent: 'crow'
		});
		this.spanEcho = new BaseElement({
			tag: 'span',
			className: 'header__logo_echo',
			textContent: 'echo'
		});
	}
	render() {
		this.addChildren(this.spanCrow.elem, this.spanEcho.elem);
	}
}
