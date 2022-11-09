import { BaseElement } from '../../../BaseElement';

export class NextLvlBtn extends BaseElement {
	constructor(langState) {
		super({
			tag: 'button',
			className: 'quiz__next-lvl'
		});
		this.lang = langState;
	}
	render() { }
}
