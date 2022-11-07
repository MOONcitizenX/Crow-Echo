import { BaseElement } from '../../BaseElement';
import { Navbar } from './Navbar';
import './Header.scss';
import { TopContainer } from './TopContainer';

export class Header extends BaseElement {
	constructor(langState, themeState) {
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
		this.elem.append(topContainer.elem, nav.elem);
	}
}
