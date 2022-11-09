import { BaseElement } from '../../BaseElement';
import { Home } from './Home';
import './Main.scss';
import { Quiz } from './Quiz/Quiz';

export class MainPage extends BaseElement {
	constructor(langState) {
		super({
			tag: 'main',
			className: 'main'
		});
		this.lang = langState;
	}
	renderHome() {
		this.currentPage?.destroy();
		const home = new Home(this.lang);
		home.render();
		this.currentPage = home;
		this.addChildren(home.elem);
	}
	renderQuiz() {
		this.currentPage?.destroy();
		const quiz = new Quiz(this.lang);
		quiz.render();
		this.currentPage = quiz;
		this.addChildren(quiz.elem);
	}
	renderGallery() {
		this.currentPage?.destroy();
	}
}
