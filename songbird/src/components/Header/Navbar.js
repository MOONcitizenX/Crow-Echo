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
            this.quizLink.elem.textContent = textContent[val].quiz;
            this.galleryLink.elem.textContent = textContent[val].gallery;
        };
        this.lang = langState;
        this.mainLink = new BaseElement({
            tag: 'div',
            className: 'nav__item nav__item_main'
        });
        this.quizLink = new BaseElement({
            tag: 'div',
            className: 'nav__item nav__item_play'
        });
        this.galleryLink = new BaseElement({
            tag: 'div',
            className: 'nav__item nav__item_gallery'
        });
    }
    render() {
        this.elem.append(this.mainLink.elem, this.quizLink.elem, this.galleryLink.elem);
        this.update(this.lang.get());
        this.lang.add(this.update);
    }
}
