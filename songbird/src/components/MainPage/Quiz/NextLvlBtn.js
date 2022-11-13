import { BaseElement } from '../../../BaseElement';
import textContent from '../../../textContent';

export class NextLvlBtn extends BaseElement {
	constructor(langState) {
		super({
			tag: 'button',
			className: 'quiz__next-lvl'
		});
		this.update = (val) => {
			this.elem.textContent = textContent[val].netx_btn;
		};
		this.lang = langState;
	}
	render() {
		this.update(this.lang.get());
		this.lang.add(this.update);
	}
	destroy() {
		this.lang.remove(this.update);
		super.destroy();
	}
}
