import { getRandomNum } from './Randomizer';

export class Router {
	constructor(routes, errorCallback, quizState) {
		this.routes = routes;
		this.errorCallback = errorCallback;
		this.quizState = quizState;
		this.onHashChangeHandler = () => {
			const hashPath = window.location.hash.slice(1);
			if (Object.keys(this.routes).includes(hashPath)) {
				this.routes[hashPath]();
			}
			else {
				this.errorCallback();
			}
			this.refreshQuizState();
		};
		this.refreshQuizState = () => {
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
		window.addEventListener('hashchange', this.onHashChangeHandler);
		this.onHashChangeHandler();
	}
	destroy() {
		window.removeEventListener('hashchange', this.onHashChangeHandler);
	}
}
