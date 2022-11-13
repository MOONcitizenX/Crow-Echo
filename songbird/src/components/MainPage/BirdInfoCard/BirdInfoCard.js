import { BaseElement } from '../../../BaseElement';

export class BirdInfoCard extends BaseElement {
	constructor(langState) {
		super({
			tag: 'div',
			className: 'quiz-card'
		});
		this.lang = langState;
	}
	render() { }
}
