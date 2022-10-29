import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MainPage } from './components/MainPage';

export class App {
	runApp() {
		const root = document.getElementById('root');
		const header = new Header();
		const main = new MainPage();
		const footer = new Footer();
		if (root) {
			root.append(header.elem, main.elem, footer.elem);
		}
	}
}
