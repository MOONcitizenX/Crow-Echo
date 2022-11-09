import { BaseElement } from '../../BaseElement';
import { LangSwitch } from './LangSwitch';
import { Logo } from './Logo';
import { ThemeSwitch } from './ThemeSwitch';
import featherImg from '../../assets/svg/feather_header.svg';

export class TopContainer extends BaseElement {
	constructor(langState, themeState) {
		super({
			tag: 'div',
			className: 'header__top-container'
		});
		this.lang = langState;
		this.theme = themeState;
	}
	render() {
		const logo = new Logo();
		logo.render();
		const langSwitch = new LangSwitch(this.lang);
		langSwitch.render();
		const themeSwitch = new ThemeSwitch(this.theme);
		themeSwitch.render();
		const feather = new BaseElement({
			tag: 'img',
			className: 'header__feather',
			attr: {
				src: featherImg
			}
		});
		this.addChildren(logo.elem, langSwitch.elem, themeSwitch.elem, feather.elem);
	}
}
