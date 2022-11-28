import { BaseElement } from '../../../../../BaseElement';
import birdsData from '../../../../../birdsData';
import { QuizStateOptions } from '../../../../../interfaces/interfaces';
import { LanguageState } from '../../../../../states/LanguageState';
import { PlayerState } from '../../../../../states/PlayerState';
import { QuizState } from '../../../../../states/QuizState';
import textContent from '../../../../../textContent';
import { AudioPlayer } from '../AudioPlayer';
import './BirdInfoCard.scss';

export class BirdInfoCard extends BaseElement {
	private lang;
	private quizState;
	private playerState;
	private defaultMsg?;
	private defaultMsgChildren?;

	private player;
	private birdImg;
	private birdNameContainer;
	private birdName;
	private birdNameLatin;
	private birdDesc;
	constructor(
		langState: LanguageState,
		baseClass: string,
		quizState?: QuizState,
		withDefault?: boolean
	) {
		super({
			tag: 'div',
			className: `${baseClass} bird-card`
		});
		this.lang = langState;
		this.quizState = quizState;
		this.playerState = new PlayerState({
			volume: 0.75,
			isMuted: false,
			timeCurrent: 0,
			isPaused: true,
			src: '',
			timeWidth: 0
		});
		if (withDefault) {
			this.defaultMsg = new BaseElement({
				tag: 'div',
				className: 'bird-card__default'
			});
			this.defaultMsgChildren = textContent[
				this.lang.get()
			].default_msg.map(
				(text) =>
					new BaseElement({
						tag: 'p',
						className: 'bird-card__default_item'
					})
			);
			this.defaultMsg.addChildren(...this.defaultMsgChildren);
		}

		this.player = new AudioPlayer(this.playerState, 'bird-card');

		this.birdImg = new BaseElement({
			tag: 'img',
			className: 'bird-card__img',
			attr: {
				src: '',
				alt: 'Bird'
			}
		});
		this.birdNameContainer = new BaseElement({
			tag: 'div',
			className: 'bird-card__name-container'
		});
		this.birdName = new BaseElement({
			tag: 'p',
			className: 'bird-card__name'
		});
		this.birdNameLatin = new BaseElement({
			tag: 'p',
			className: 'bird-card__name-latin'
		});
		this.birdDesc = new BaseElement({
			tag: 'p',
			className: 'bird-card__description'
		});
	}

	render() {
		this.birdNameContainer.addChildren(this.birdName, this.birdNameLatin);
		this.player.render();
		this.addChildren(
			this.defaultMsg,
			this.birdImg,
			this.birdNameContainer,
			this.player,
			this.birdDesc
		);
		this.lang.add(this.updateLang);
		this.updateLang(this.lang.get());
		this.quizState.add(this.updateState);
		this.updateState(this.quizState.get());
	}

	updateState = (state: QuizStateOptions) => {
		if (state.clickedCard === -1) {
			this.elem.classList.add('showing');
		} else {
			this.elem.classList.remove('showing');
		}

		const currentBird = birdsData[state.quizLvl][state.clickedCard];
		const Img = this.birdImg.elem as HTMLMediaElement;
		if (currentBird) {
			this.birdNameLatin.elem.textContent = currentBird.species;

			this.birdName.elem.textContent =
				currentBird[`name${this.lang.get() === 'ru' ? '' : '_en'}`];

			this.birdDesc.elem.textContent =
				currentBird[
					`description${this.lang.get() === 'ru' ? '' : '_en'}`
				];

			Img.src = currentBird.image;
			this.playerState.set({
				src: currentBird.audio,
				timeCurrent: 0,
				timeWidth: 0,
				isPaused: true
			});
		} else {
			this.birdNameLatin.elem.textContent = '';

			this.birdName.elem.textContent = '';

			this.birdDesc.elem.textContent = '';
			Img.src = '';
			this.playerState.set({
				src: ''
			});
		}
	};

	updateLang = (val: 'ru' | 'en') => {
		const currentBird =
			birdsData[this.quizState.get().quizLvl][
				this.quizState.get().clickedCard
			];
		if (currentBird) {
			this.birdName.elem.textContent =
				currentBird[`name${val === 'ru' ? '' : '_en'}`];
			this.birdDesc.elem.textContent =
				currentBird[`description${val === 'ru' ? '' : '_en'}`];
		} else {
			this.birdName.elem.textContent = '';
			this.birdDesc.elem.textContent = '';
		}
		this.defaultMsgChildren.forEach((child, ind) => {
			child.elem.textContent = textContent[val].default_msg[ind];
		});
	};

	destroy() {
		this.lang.remove(this.updateLang);
		this.quizState.remove(this.updateState);
		super.destroy();
	}
}
