import { BaseElement } from '../../BaseElement';
import textContent from '../../textContent';
import './Home.scss';

export class Home extends BaseElement {
	constructor(langState) {
		super({
			tag: 'div',
			className: 'home'
		});
		this.update = (val) => {
			this.quote.elem.textContent = textContent[val].quote;
		};
		this.quote = new BaseElement({
			tag: 'p',
			className: 'home__quote',
			textContent: ''
		});
		this.crowsImg = new BaseElement({
			tag: 'div',
			className: 'home__img'
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
		this.addChildren(this.quote, this.crowsImg.elem, this.crow.elem);
	}
}
