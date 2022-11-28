import { BaseElement } from '../../../BaseElement';
import { QuizStateOptions } from '../../../interfaces/interfaces';
import { LanguageState } from '../../../states/LanguageState';
import { QuizState } from '../../../states/QuizState';
import textContent from '../../../textContent';

export class QuizScore extends BaseElement {
	private lang;
	private quizState;
	constructor(langState: LanguageState, quizState: QuizState) {
		super({
			tag: 'div',
			className: 'quiz__score'
		});
		this.lang = langState;
		this.quizState = quizState;
	}

	render() {
		this.updateLang(this.lang.get());
		this.lang.add(this.updateLang);
		this.quizState.add(this.updateState);
		this.updateState(this.quizState.get());
	}

	updateLang = (val: 'ru' | 'en') => {
		this.elem.textContent = textContent[val].score_msg;
		this.elem.textContent = `${textContent[val].score_msg} ${this.quizState
			.get()
			.scoreTotal.toString()}`;
	};

	updateState = (state: QuizStateOptions) => {
		this.elem.textContent = `${
			textContent[this.lang.get()].score_msg
		} ${state.scoreTotal.toString()}`;
	};

	destroy() {
		this.lang.remove(this.updateLang);
		this.quizState.remove(this.updateState);
		super.destroy();
	}
}
