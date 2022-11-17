import { BaseElement } from '../../../../../BaseElement';
import birdsData from '../../../../../birdsData';
import './QuizSelect.scss';
import win from '../../../../../assets/audio/win.mp3';
import wrong from '../../../../../assets/audio/wrong.mp3';

export class QuizSelect extends BaseElement {
	constructor(langState, quizState) {
		super({
			tag: 'div',
			className: 'quiz__select'
		});
		this.updateState = (state) => {
			this.options.forEach((option, ind) => {
				option.elem.textContent =
                    birdsData[state.quizLvl][ind][`name${this.lang.get() === 'ru' ? '' : '_en'}`];
				if (state.dropStyles) {
					option.elem.classList.remove('wrong-answer', 'right-answer');
				}
			});
		};
		this.updateLang = (val) => {
			this.options.forEach((option, ind) => {
				option.elem.textContent =
                    birdsData[this.quizState.get().quizLvl][ind][`name${val === 'ru' ? '' : '_en'}`];
			});
		};
		this.lang = langState;
		this.quizState = quizState;
		this.options = birdsData[this.quizState.get().quizLvl].map((option) => new BaseElement({
			tag: 'button',
			className: 'select__item',
			textContent: option[`name${this.lang.get() === 'ru' ? '' : '_en'}`],
			attr: {
				id: option.id,
				onclick: (e) => {
					const target = e.target;
					const clickAudio = new Audio();
					if (this.quizState.get().quizCorrectAnswer ===
                        +target.id - 1) {
						if (!target.classList.contains('right-answer')) {
							target.classList.add('right-answer');
							clickAudio.src = win;
							clickAudio.play();
							this.options.forEach((option) => {
								if (!option.elem.classList.contains('wrong-answer') ||
                                    !option.elem.classList.contains('right-answer'))
									option.elem.classList.add('wrong-answer');
							});
							this.quizState.set({
								isAnswered: true,
								scoreTotal: this.quizState.get().scoreTotal +
                                    this.quizState.get().scoreLvl
							});
						}
					}
					else {
						if (!target.classList.contains('wrong-answer')) {
							clickAudio.src = wrong;
							clickAudio.play();
							this.quizState.set({
								scoreLvl: this.quizState.get().scoreLvl - 1
							});
						}
						target.classList.add('wrong-answer');
					}
					this.quizState.set({
						clickedCard: +target.id - 1
					});
				}
			}
		}));
	}
	render() {
		this.addChildren(...this.options);
		this.updateState(this.quizState.get());
		this.quizState.add(this.updateState);
		this.lang.add(this.updateLang);
		this.lang.add(this.updateLang);
	}
	destroy() {
		this.lang.remove(this.updateLang);
		this.quizState.remove(this.updateState);
		super.destroy();
	}
}
