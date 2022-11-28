import { BaseElement } from '../../../BaseElement';
import { QuizStateOptions } from '../../../interfaces/interfaces';
import { getRandomNum } from '../../../services/Randomizer';
import { LanguageState } from '../../../states/LanguageState';
import { QuizState } from '../../../states/QuizState';
import textContent from '../../../textContent';

export class NextLvlBtn extends BaseElement {
	private lang;
	private quizState;
	constructor(langState: LanguageState, quizState: QuizState) {
		super({
			tag: 'button',
			className: 'quiz__next-lvl',
			attr: {
				disabled: quizState.get().isAnswered ? true : false,
				onclick: (e: Event) => {
					const target = e.target as HTMLElement;
					if (target.id === 'winner') {
						this.quizState.set({
							success: true
						});
						window.location.href = '#results';
					} else {
						this.quizState.set({
							quizLvl: this.quizState.get().quizLvl + 1,
							dropStyles: true
						});

						this.quizState.set({
							dropStyles: false,
							isAnswered: false,
							scoreLvl: 5,
							clickedCard: -1,
							quizCorrectAnswer: getRandomNum(0, 6),
							success: false
						});
					}
				}
			}
		});
		this.lang = langState;
		this.quizState = quizState;
	}

	render() {
		this.updateLang(this.lang.get());
		this.lang.add(this.updateLang);
		this.updateState(this.quizState.get());
		this.quizState.add(this.updateState);
	}

	updateLang = (val: 'ru' | 'en') => {
		this.elem.textContent =
			textContent[val][
				this.quizState.get().quizLvl === 5 ? 'finish_game' : 'next_btn'
			];
	};

	updateState = (state: QuizStateOptions) => {
		const button = this.elem as HTMLButtonElement;
		if (state.isAnswered) {
			button.disabled = false;
		} else {
			button.disabled = true;
		}
		this.elem.textContent =
			textContent[this.lang.get()][
				state.quizLvl === 5 ? 'finish_game' : 'next_btn'
			];
		if (state.quizLvl === 5) {
			button.id = 'winner';
		} else {
			button.id = '';
		}
	};

	destroy() {
		this.quizState.remove(this.updateState);
		this.lang.remove(this.updateLang);
		super.destroy();
	}
}
