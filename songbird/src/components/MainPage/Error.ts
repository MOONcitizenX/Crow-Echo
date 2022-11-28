import { BaseElement } from '../../BaseElement';
import { LanguageState } from '../../states/LanguageState';
import textContent from '../../textContent';
import './Error.scss';

export class Error extends BaseElement {
	private lang;
	private message;
	private status;
	private crow;
	constructor(langState: LanguageState) {
		super({
			tag: 'div',
			className: 'error'
		});
		this.message = new BaseElement({
			tag: 'p',
			className: 'error__message',
			textContent: ''
		});
		this.status = new BaseElement({
			tag: 'h3',
			className: 'error__status',
			textContent: '404'
		});
		this.crow = new BaseElement({
			tag: 'div',
			className: 'home__crow'
		});
		this.lang = langState;
	}

	render() {
		this.update(this.lang.get());
		this.lang.add(this.update);
		this.addChildren(this.message, this.status.elem, this.crow.elem);
	}

	update = (val: 'ru' | 'en') => {
		this.message.elem.textContent = textContent[val].error_message;
	};

	destroy() {
		this.lang.remove(this.update);
		super.destroy();
	}
}
