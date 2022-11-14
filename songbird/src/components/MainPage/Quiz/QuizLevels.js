import { BaseElement } from '../../../BaseElement';
import textContent from '../../../textContent';

export class QuizLevels extends BaseElement {
	constructor(langState, quizState) {
		super({
			tag: 'div',
			className: 'quiz-levels'
		});
		this.updateLang = (val) => {
			this.levels.forEach((level, ind) => {
				level.elem.textContent = textContent[val].quiz_levels[ind];
			});
		};
		this.updateState = (state) => {
			this.levels.forEach((level, ind) => {
				level.elem.classList.remove('active');
				if (ind === state.quizLvl) {
					level.elem.classList.add('active');
				}
			});
		};
		this.lang = langState;
		this.quizState = quizState;
		this.levels = textContent[this.lang.get()].quiz_levels.map((levelText) => {
			return new BaseElement({
				tag: 'div',
				className: 'quiz-levels__item',
				textContent: levelText
			});
		});
	}
	render() {
		this.updateLang(this.lang.get());
		this.lang.add(this.updateLang);
		this.levels.forEach((el) => this.addChildren(el));
		this.quizState.add(this.updateState);
		this.updateState(this.quizState.get());
	}
	destroy() {
		this.lang.remove(this.updateLang);
		this.quizState.remove(this.updateState);
		super.destroy();
	}
}
