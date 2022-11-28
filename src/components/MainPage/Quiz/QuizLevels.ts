import { BaseElement } from '../../../BaseElement';
import { QuizStateOptions } from '../../../interfaces/interfaces';
import { LanguageState } from '../../../states/LanguageState';
import { QuizState } from '../../../states/QuizState';
import textContent from '../../../textContent';

export class QuizLevels extends BaseElement {
	private lang;
	private quizState;
	private levels: BaseElement[];
	constructor(langState: LanguageState, quizState: QuizState) {
		super({
			tag: 'div',
			className: 'quiz-levels'
		});
		this.lang = langState;
		this.quizState = quizState;
		this.levels = textContent[this.lang.get()].quiz_levels.map(
			(levelText) => {
				return new BaseElement({
					tag: 'div',
					className: 'quiz-levels__item',
					textContent: levelText
				});
			}
		);
	}

	render() {
		this.updateLang(this.lang.get());
		this.lang.add(this.updateLang);
		this.levels.forEach((el) => this.addChildren(el));
		this.quizState.add(this.updateState);
		this.updateState(this.quizState.get());
	}

	updateLang = (val: 'ru' | 'en') => {
		this.levels.forEach((level, ind) => {
			level.elem.textContent = textContent[val].quiz_levels[ind];
		});
	};

	updateState = (state: QuizStateOptions) => {
		this.levels.forEach((level, ind) => {
			level.elem.classList.remove('active');
			if (ind === state.quizLvl) {
				level.elem.classList.add('active');
			}
		});
	};

	destroy() {
		this.lang.remove(this.updateLang);
		this.quizState.remove(this.updateState);
		super.destroy();
	}
}
