import { BaseElement } from '../../BaseElement';
import './Footer.scss';
import { FooterContainer } from './FooterContainer';

export class Footer extends BaseElement {
	constructor() {
		super({
			tag: 'footer',
			className: 'footer'
		});
	}
	render() {
		const container = new FooterContainer();
		container.render();
		this.addChildren(container.elem);
	}
}
