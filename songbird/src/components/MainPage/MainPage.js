import { BaseElement } from '../../BaseElement';
import { Error } from './Error';
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
		this.addChildren(home);
	}
	renderQuiz() {
		this.currentPage?.destroy();
		const quiz = new Quiz(this.lang);
		quiz.render();
		this.currentPage = quiz;
		this.addChildren(quiz);
	}
	renderResults() {
		this.currentPage?.destroy();
	}
	renderGallery() {
		this.currentPage?.destroy();
	}
	renderError() {
		this.currentPage?.destroy();
		const error = new Error(this.lang);
		error.render();
		this.currentPage = error;
		this.addChildren(error);
	}
}
