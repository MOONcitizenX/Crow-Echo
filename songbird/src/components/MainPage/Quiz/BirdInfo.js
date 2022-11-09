import { BaseElement } from '../../../BaseElement';

export class BirdInfo extends BaseElement {
	constructor(langState) {
		super({
			tag: 'div',
			className: 'quiz__bird-info'
		});
		this.lang = langState;
	}
	render() { }
}
