import { BaseElement } from '../../../BaseElement';

export class QuizQuestionCard extends BaseElement {
	constructor(langState) {
		super({
			tag: 'div',
			className: 'quiz__question-card'
		});
		this.lang = langState;
		this.crow = new BaseElement({
			tag: 'div',
			className: 'quiz__question-card_img'
		});
	}
	render() {
		this.addChildren(this.crow.elem);
	}
}
