import { BaseElement } from '../../BaseElement';
import { LanguageState } from '../../states/LanguageState';
import { Navbar } from './Navbar';
import './Header.scss';
import { TopContainer } from './TopContainer';
import { ThemeState } from '../../states/ThemeState';

export class Header extends BaseElement {
	private lang;
	private theme;
	constructor(langState: LanguageState, themeState: ThemeState) {
		super({
			tag: 'header',
			className: 'header'
		});
		this.lang = langState;
		this.theme = themeState;
	}
	render() {
		const topContainer = new TopContainer(this.lang, this.theme);
		topContainer.render();
		const nav = new Navbar(this.lang);
		nav.render();
		this.addChildren(topContainer.elem, nav.elem);
	}
}
