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
	}
	get() {
		return this.quizState;
	}
}
