import { QuizStateOptions } from '../interfaces/interfaces';
import { Observable } from '../utils/Observable';

export class QuizState extends Observable<QuizStateOptions> {
	constructor(private quizState: QuizStateOptions) {
		super();
	}

	set(options: Partial<QuizStateOptions>) {
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
