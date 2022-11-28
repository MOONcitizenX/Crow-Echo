import { BaseElement } from '../../BaseElement';
import schoolLogo from '../../assets/img/logo-rsschool3.png';

export class FooterContainer extends BaseElement {
	private logo;
	private logoImg;
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
		this.logoImg = new BaseElement({
			tag: 'img',
			className: 'footer__logo_img',
			attr: {
				src: schoolLogo,
				alt: 'RS School'
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
		this.addChildren(this.logo.elem, this.year.elem, this.link.elem);
	}
}
