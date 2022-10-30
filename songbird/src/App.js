import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainPage } from './components/MainPage/MainPage';
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
