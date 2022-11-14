import { BaseElement } from '../../../BaseElement';
import textContent from '../../../textContent';

export class QuizScore extends BaseElement {
	constructor(langState, quizState) {
		super({
			tag: 'div',
			className: 'quiz__score'
		});
		this.updateLang = (val) => {
			this.elem.textContent = textContent[val].score_msg;
			this.elem.textContent = `${textContent[val].score_msg} ${this.quizState
				.get()
				.scoreTotal.toString()}`;
		};
		this.updateState = (state) => {
			this.elem.textContent = `${textContent[this.lang.get()].score_msg} ${state.scoreTotal.toString()}`;
		};
		this.lang = langState;
		this.quizState = quizState;
	}
	render() {
		this.updateLang(this.lang.get());
		this.lang.add(this.updateLang);
		this.quizState.add(this.updateState);
		this.updateState(this.quizState.get());
	}
	destroy() {
		this.lang.remove(this.updateLang);
		this.quizState.remove(this.updateState);
		super.destroy();
	}
}
