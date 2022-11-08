import { BaseElement } from '../../BaseElement';
import { Home } from './Home';
import './Main.scss';

export class MainPage extends BaseElement {
	constructor(langState) {
		super({
			tag: 'main',
			className: 'main'
		});
		this.lang = langState;
	}
	renderHome() {
		const home = new Home(this.lang);
		home.render();
		this.elem.append(home.elem);
	}
	renderQuiz() { }
	renderGallery() { }
}
