import { BaseElement } from '../../BaseElement';
import schoolLogo from '../../assets/img/logo-rsschool3.png';

export class FooterContainer extends BaseElement {
	constructor() {
		super({
			tag: 'div',
			className: 'footer__container'
		});
		this.logo = new BaseElement({
			tag: 'a',
			className: 'footer__logo',
			attr: {
				href: 'https://app.rs.school/',
				target: '_blank'
			}
		});
		this.logoImg = new BaseElement({
			tag: 'img',
			className: 'footer__logo_img',
			attr: {
				src: schoolLogo
			}
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
		this.logo.elem.append(this.logoImg.elem);
		this.elem.append(this.logo.elem, this.year.elem, this.link.elem);
	}
}
