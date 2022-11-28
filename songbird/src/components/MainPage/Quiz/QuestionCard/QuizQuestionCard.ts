import { BaseElement } from '../../../../BaseElement';
import birdsData from '../../../../birdsData';
import { QuizStateOptions } from '../../../../interfaces/interfaces';
import { LanguageState } from '../../../../states/LanguageState';
import { PlayerState } from '../../../../states/PlayerState';
import { QuizState } from '../../../../states/QuizState';
import { QuizScore } from '../QuizScore';
import { AudioPlayer } from './AudioPlayer';
import './QuizQuestionCard.scss';

export class QuizQuestionCard extends BaseElement {
	private lang;
	private quizState;
	private image;
	private rightContainer;
	private rightContainerTop;
	private birdName;
	private playerState;
	constructor(langState: LanguageState, quizState: QuizState) {
		super({
			tag: 'div',
			className: 'quiz__question-card'
		});
		this.lang = langState;
		this.quizState = quizState;
		this.playerState = new PlayerState({
			volume: 0.75,
			isMuted: false,
			timeCurrent: 0,
			isPaused: true,
			src: birdsData[this.quizState.get().quizLvl][
				this.quizState.get().quizCorrectAnswer
			].audio,
			timeWidth: 0
		});
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
		const score = new QuizScore(this.lang, this.quizState);
		score.render();
		const player = new AudioPlayer(this.playerState, 'question');
		player.render();
		this.rightContainerTop.addChildren(this.birdName, score);
		this.rightContainer.addChildren(this.rightContainerTop, player);
		this.addChildren(this.image, this.rightContainer);
		this.quizState.add(this.update);
		this.update(this.quizState.get());
		this.lang.add(this.updateLang);
		this.updateLang(this.lang.get());
	}

	update = (state: QuizStateOptions) => {
		if (
			this.playerState.get().src !==
			birdsData[this.quizState.get().quizLvl][
				this.quizState.get().quizCorrectAnswer
			].audio
		) {
			this.playerState.set({
				src: birdsData[state.quizLvl][state.quizCorrectAnswer].audio,
				timeCurrent: 0,
				timeWidth: 0,
				isPaused: true
			});
		}

		if (state.isAnswered) {
			this.playerState.set({
				isPaused: true
			});
			this.birdName.elem.textContent =
				birdsData[state.quizLvl][state.quizCorrectAnswer][
					`name${this.lang.get() === 'ru' ? '' : '_en'}`
				];
			this.image.elem.style.backgroundImage = `url("${
				birdsData[state.quizLvl][state.quizCorrectAnswer].image
			}")`;
			this.image.elem.classList.add('active');
		} else {
			this.birdName.elem.textContent = '*******';
			this.image.elem.classList.remove('active');
			this.image.elem.style.backgroundImage = 'none';
		}
	};

	updateLang = (val: 'ru' | 'en') => {
		if (this.quizState.get().isAnswered) {
			this.birdName.elem.textContent =
				birdsData[this.quizState.get().quizLvl][
					this.quizState.get().quizCorrectAnswer
				][`name${val === 'ru' ? '' : '_en'}`];
		}
	};

	destroy() {
		this.lang.remove(this.updateLang);
		this.quizState.remove(this.update);
		super.destroy();
	}
}
