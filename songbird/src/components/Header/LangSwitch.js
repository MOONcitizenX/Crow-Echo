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
				? this.elem.classList.add('lang-switch_active')
				: this.elem.classList.remove('lang-switch_active');
		};
		this.lang = langState;
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
	}
	render() {
		this.lang.add(this.update);
		this.update(this.lang.get());
		this.addChildren(this.switchTextRu.elem, this.switchTextEn.elem);
	}
	destroy() {
		this.lang.remove(this.update);
		super.destroy();
	}
}
