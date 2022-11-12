import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainPage } from './components/MainPage/MainPage';
import { Router } from './services/Router';
import { LanguageState } from './states/LanguageState';
import { ThemeState } from './states/ThemeState';

export class App {
	runApp() {
		const langState = new LanguageState('ru');
		const themeState = new ThemeState('dark');
		const root = document.getElementById('root');
		const header = new Header(langState, themeState);
		header.render();
		const main = new MainPage(langState);
		main.renderHome();
		const footer = new Footer();
		footer.render();
		if (root) {
			this.router = new Router({
				'': () => main.renderHome(),
				home: () => main.renderHome(),
				quiz: () => main.renderQuiz(),
				results: () => main.renderResults(),
				gallery: () => main.renderGallery()
			}, () => main.renderError());
			root.append(header.elem, main.elem, footer.elem);
		}
	}
}
