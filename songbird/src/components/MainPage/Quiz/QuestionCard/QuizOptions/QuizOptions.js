import { BaseElement } from '../../../../../BaseElement';

export class QuizOptions extends BaseElement {
	constructor(langState) {
		super({
			tag: 'div',
			className: 'quiz__options'
		});
		this.lang = langState;
	}
	render() { }
}
