import { Observable } from '../utils/Observable';

export class QuizState extends Observable {
	constructor(quizState) {
		super();
		this.quizState = quizState;
	}
	set(options) {
		this.quizState = {
			...this.quizState,
			...options
		};
		this.emit(this.quizState);
		console.log(this.quizState.scoreTotal, 'score total');
		console.log(this.quizState.scoreLvl, 'score level');
	}
	get() {
		return this.quizState;
	}
}
