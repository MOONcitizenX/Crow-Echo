import { BaseElement } from '../../BaseElement';
import { LangSwitch } from './LangSwitch';
import { Logo } from './Logo';
import { ThemeSwitch } from './ThemeSwitch';
export class TopContainer extends BaseElement {
    constructor(langState, themeState) {
        super({
            tag: 'div',
            className: 'header__top-container'
        });
        this.lang = langState;
        this.theme = themeState;
    }
    render() {
        const logo = new Logo();
        logo.render();
        const langSwitch = new LangSwitch(this.lang);
        langSwitch.render();
        const themeSwitch = new ThemeSwitch(this.theme);
        themeSwitch.render();
        this.elem.append(logo.elem, langSwitch.elem, themeSwitch.elem);
    }
}
