import { BaseElement } from '../../BaseElement';
import { LanguageState } from '../../states/LanguageState';

export class LangSwitch extends BaseElement {
	private lang;
	private switchTextRu: BaseElement;
	private switchTextEn: BaseElement;
	constructor(langState: LanguageState) {
		super({
			tag: 'div',
			className: 'lang-switch',
			attr: {
				onclick: () => {
					langState.set(langState.get() === 'ru' ? 'en' : 'ru');
				}
			}
		});
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

	update = (val: 'ru' | 'en') => {
		val === 'ru'
			? this.elem.classList.add('lang-switch_active')
			: this.elem.classList.remove('lang-switch_active');
	};

	destroy() {
		this.lang.remove(this.update);
		super.destroy();
	}
}
