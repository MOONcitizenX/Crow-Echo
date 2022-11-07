import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainPage } from './components/MainPage/MainPage';
import { LanguageState } from './utils/LanguageState';
import { ThemeState } from './utils/ThemeState';

export class App {
	runApp() {
		const langState = new LanguageState('ru');
		const themeState = new ThemeState('dark');
		const root = document.getElementById('root');
		const header = new Header(langState, themeState);
		header.render();
		const main = new MainPage();
		const footer = new Footer();
		if (root) {
			root.append(header.elem, main.elem, footer.elem);
		}
	}
}
