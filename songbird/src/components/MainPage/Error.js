import { BaseElement } from '../../BaseElement';
import textContent from '../../textContent';
import './Error.scss';

export class Error extends BaseElement {
	constructor(langState) {
		super({
			tag: 'div',
			className: 'error'
		});
		this.update = (val) => {
			this.message.elem.textContent = textContent[val].error_message;
		};
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
		this.lang = langState;
	}
	render() {
		this.update(this.lang.get());
		this.lang.add(this.update);
		this.addChildren(this.message, this.status.elem);
	}
}
