import { BaseElement } from '../../BaseElement';

export class FooterContainer extends BaseElement {
	private logo;
	private projectName;
	private year;
	private link;
	constructor() {
		super({
			tag: 'div',
			className: 'footer__container'
		});
		this.logo = new BaseElement({
			tag: 'a',
			className: 'footer__logo',
			attr: {
				href: 'https://rs.school/js/',
				target: '_blank'
			}
		});
		this.projectName = new BaseElement({
			tag: 'p',
			className: 'footer__year',
			textContent: 'Crow Echo'
		});
		this.year = new BaseElement({
			tag: 'p',
			className: 'footer__year',
			textContent: '2022'
		});
		this.link = new BaseElement({
			tag: 'a',
			className: 'footer__link',
			textContent: '@MOONcitizenX',
			attr: {
				href: 'https://github.com/MOONcitizenX',
				target: '_blank'
			}
		});
	}
	render() {
		this.logo.elem.append(this.projectName.elem);
		this.addChildren(this.logo.elem, this.year.elem, this.link.elem);
	}
}
