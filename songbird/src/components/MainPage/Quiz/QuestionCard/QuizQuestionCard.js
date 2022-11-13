import { BaseElement } from '../../../../BaseElement';
import birdsData from '../../../../birdsData';
import { getLS } from '../../../../services/LocalStorageHandlers';
import { PlayerState } from '../../../../states/PlayerState';
import { QuizScore } from '../QuizScore';
import { QuestionPlayer } from './QuestionPlayer';

export class QuizQuestionCard extends BaseElement {
	constructor(langState) {
		super({
			tag: 'div',
			className: 'quiz__question-card'
		});
		this.lang = langState;
		this.image = new BaseElement({
			tag: 'div',
			className: 'question-card__img'
		});
		this.rightContainer = new BaseElement({
			tag: 'div',
			className: 'question-card__container'
		});
		this.rightContainerTop = new BaseElement({
			tag: 'div',
			className: 'question-card__container_top'
		});
		this.birdName = new BaseElement({
			tag: 'h3',
			className: 'question-card__bird-name',
			textContent: '*******'
		});
	}
	render() {
		const score = new QuizScore(this.lang);
		score.render();
		const playerState = new PlayerState({
			volume: getLS('quiz_volume') || 0.75,
			isMuted: getLS('quiz_isMuted') || false,
			timeCurrent: getLS('quiz_timeCurrent') || '0',
			timeEnd: getLS('quiz_timeEnd') || birdsData[0][0].duration,
			isPaused: getLS('quiz_isPaused') || true,
			src: getLS('quiz_src') || birdsData[0][0].audio,
			timeWidth: getLS('quiz_timeWidth') || 0
		});
		const player = new QuestionPlayer(playerState, '');
		player.render();
		this.rightContainerTop.addChildren(this.birdName, score);
		this.rightContainer.addChildren(this.rightContainerTop, player);
		this.addChildren(this.image, this.rightContainer);
	}
}
