import { BaseElement } from '../../../BaseElement';
import textContent from '../../../textContent';

export class QuizScore extends BaseElement {
	constructor(langState) {
		super({
			tag: 'div',
			className: 'quiz__score'
		});
		this.update = (val) => {
			this.elem.innerText = textContent[val].score_msg;
		};
		this.lang = langState;
		this.scoreNum = new BaseElement({
			tag: 'span',
			className: 'quiz__score-num',
			textContent: '0'
		});
	}
	render() {
		this.update(this.lang.get());
		this.lang.add(this.update);
		this.addChildren(this.scoreNum);
	}
	destroy() {
		this.lang.remove(this.update);
		super.destroy();
	}
}
