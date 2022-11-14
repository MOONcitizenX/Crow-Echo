import { BaseElement } from '../../../BaseElement';
import { getRandomNum } from '../../../services/Randomizer';
import textContent from '../../../textContent';

export class NextLvlBtn extends BaseElement {
	constructor(langState, quizState) {
		super({
			tag: 'button',
			className: 'quiz__next-lvl',
			attr: {
				disabled: quizState.get().isAnswered ? true : false,
				onclick: () => {
					this.quizState.set({
						quizLvl: this.quizState.get().quizLvl + 1,
						dropStyles: true
					});
					this.quizState.set({
						dropStyles: false,
						isAnswered: false,
						scoreLvl: 5,
						quizCorrectAnswer: getRandomNum(0, 6)
					});
				}
			}
		});
		this.updateLang = (val) => {
			this.elem.textContent = textContent[val].netx_btn;
		};
		this.updateState = (state) => {
			const button = this.elem;
			if (state.isAnswered) {
				button.disabled = false;
			}
			else {
				button.disabled = true;
			}
		};
		this.lang = langState;
		this.quizState = quizState;
	}
	render() {
		this.updateLang(this.lang.get());
		this.lang.add(this.updateLang);
		this.updateState(this.quizState.get());
		this.quizState.add(this.updateState);
	}
	destroy() {
		this.quizState.remove(this.updateState);
		this.lang.remove(this.updateLang);
		super.destroy();
	}
}
