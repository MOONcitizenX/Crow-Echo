import { RoutesObj } from '../interfaces/interfaces';
import { QuizState } from '../states/QuizState';
import { getRandomNum } from './Randomizer';

export class Router {
	constructor(
		private readonly routes: RoutesObj,
		private errorCallback: () => void,
		private quizState: QuizState
	) {
		window.addEventListener('hashchange', this.onHashChangeHandler);
		this.onHashChangeHandler();
	}

	onHashChangeHandler = () => {
		const hashPath = window.location.hash.slice(1);
		if (Object.keys(this.routes).includes(hashPath)) {
			this.routes[hashPath]();
		} else {
			this.errorCallback();
		}
		this.refreshQuizState();
	};

	refreshQuizState = () => {
		this.quizState.set({
			quizLvl: 0,
			quizCorrectAnswer: getRandomNum(0, 6),
			isAnswered: false,
			scoreTotal: 0,
			scoreLvl: 5,
			clickedCard: -1,
			dropStyles: false,
			success: false
		});
	};

	destroy() {
		window.removeEventListener('hashchange', this.onHashChangeHandler);
	}
}
