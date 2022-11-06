import { BaseElement } from '../../BaseElement';
export class LangSwitch extends BaseElement {
    constructor(langState) {
        super({
            tag: 'div',
            className: 'lang-switch',
            attr: {
                onclick: () => {
                    langState.set(langState.get() === 'ru' ? 'en' : 'ru');
                }
            }
        });
        this.update = (val) => {
            val === 'ru'
                ? this.elem.classList.add(`lang-switch_active`)
                : this.elem.classList.remove(`lang-switch_active`);
        };
        this.lang = langState;
        this.lang.add(this.update);
        this.switchTextRu = new BaseElement({
            tag: 'div',
            className: 'lang-switch__btn_ru',
            textContent: 'RU'
        });
        this.switchTextEn = new BaseElement({
            tag: 'div',
            className: 'lang-switch__btn_en',
            textContent: 'EN'
        });
        this.update(this.lang.get());
    }
    render() {
        this.elem.append(this.switchTextRu.elem, this.switchTextEn.elem);
    }
}
