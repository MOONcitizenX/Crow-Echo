import { BaseElement } from './BaseElement';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Error } from './components/MainPage/Error';
import { Gallery } from './components/MainPage/Gallery/Gallery';
import { Home } from './components/MainPage/Home';
import { Quiz } from './components/MainPage/Quiz/Quiz';
import { Results } from './components/MainPage/Results';
import { getLS, setLS } from './services/LocalStorageHandlers';
import { getRandomNum } from './services/Randomizer';
import { Router } from './services/Router';
import { LanguageState } from './states/LanguageState';
import { QuizState } from './states/QuizState';
import { ThemeState } from './states/ThemeState';
import './styles/Main.scss';

export class App extends BaseElement {
	constructor() {
		super({
			tag: 'main',
			className: 'main'
		});
		this.saveTheme = (val) => {
			setLS('crow_echo_theme', val);
		};
		this.saveLang = (val) => {
			setLS('crow_echo_lang', val);
		};
		this.lang = new LanguageState(getLS('crow_echo_lang') || 'ru');
		this.theme = new ThemeState(getLS('crow_echo_theme') || 'dark');
		this.quizState = new QuizState({
			quizLvl: 0,
			quizCorrectAnswer: getRandomNum(0, 6),
			isAnswered: false,
			scoreTotal: 0,
			scoreLvl: 5,
			clickedCard: -1,
			dropStyles: false,
			success: false
		});
	}
	renderHome() {
		this.currentPage?.destroy();
		const home = new Home(this.lang, this.quizState);
		home.render();
		this.currentPage = home;
		this.addChildren(home);
	}
	renderQuiz() {
		this.currentPage?.destroy();
		const quiz = new Quiz(this.lang, this.quizState);
		quiz.render();
		this.currentPage = quiz;
		this.addChildren(quiz);
	}
	renderResults() {
		this.currentPage?.destroy();
		const results = new Results(this.lang, this.quizState.get().scoreTotal, 30, this.quizState);
		results.render();
		this.currentPage = results;
		this.addChildren(results);
	}
	renderGallery() {
		this.currentPage?.destroy();
		const gallery = new Gallery(this.lang);
		gallery.render();
		this.currentPage = gallery;
		this.addChildren(gallery);
	}
	renderError() {
		this.currentPage?.destroy();
		const error = new Error(this.lang);
		error.render();
		this.currentPage = error;
		this.addChildren(error);
	}
	runApp() {
		const root = document.getElementById('root');
		const header = new Header(this.lang, this.theme);
		header.render();
		const footer = new Footer();
		footer.render();
		if (root) {
			this.router = new Router({
				'': () => this.renderHome(),
				home: () => this.renderHome(),
				quiz: () => this.renderQuiz(),
				results: () => this.renderResults(),
				gallery: () => this.renderGallery()
			}, () => this.renderError(), this.quizState);
			root.append(header.elem, this.elem, footer.elem);
		}
		this.lang.add(this.saveLang);
		this.saveLang(this.lang.get());
		this.theme.add(this.saveTheme);
		this.saveTheme(this.theme.get());
	}
	destroy() {
		this.theme.remove(this.saveTheme);
		this.lang.remove(this.saveLang);
		super.destroy();
	}
}
