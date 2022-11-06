import { BaseElement } from '../../BaseElement';
import textContent from '../../textContent';
export class Navbar extends BaseElement {
    constructor(langState) {
        super({
            tag: 'div',
            className: 'nav'
        });
        this.update = (val) => {
            this.mainLink.elem.textContent = textContent[val].home;
            this.playLink.elem.textContent = textContent[val].quiz;
        };
        this.lang = langState;
        this.mainLink = new BaseElement({
            tag: 'div',
            className: 'nav__item nav__item_main'
        });
        this.playLink = new BaseElement({
            tag: 'div',
            className: 'nav__item nav__item_play'
        });
    }
    render() {
        this.elem.append(this.mainLink.elem, this.playLink.elem);
        this.update(this.lang.get());
        this.lang.add(this.update);
    }
}
