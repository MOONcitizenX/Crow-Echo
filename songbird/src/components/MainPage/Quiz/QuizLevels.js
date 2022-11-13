import { BaseElement } from '../../../BaseElement';
import textContent from '../../../textContent';

export class QuizLevels extends BaseElement {
	constructor(langState) {
		super({
			tag: 'div',
			className: 'quiz-levels'
		});
		this.update = (val) => {
			this.levels.forEach((level, ind) => {
				level.elem.textContent = textContent[val].quiz_levels[ind];
			});
		};
		this.lang = langState;
		this.levels = textContent[this.lang.get()].quiz_levels.map((levelText) => {
			return new BaseElement({
				tag: 'div',
				className: 'quiz-levels__item',
				textContent: levelText
			});
		});
	}
	render() {
		this.update(this.lang.get());
		this.lang.add(this.update);
		this.levels.forEach((el) => this.addChildren(el));
	}
	destroy() {
		this.lang.remove(this.update);
		super.destroy();
	}
}
