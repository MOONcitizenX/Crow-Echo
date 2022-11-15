import { BaseElement } from '../../BaseElement';
import textContent from '../../textContent';
import './Results.scss';
import crow from '../../assets/svg/crow.svg';
import martini from '../../assets/svg/cocktail.svg';
import { getRandomNum } from '../../services/Randomizer';

export class Results extends BaseElement {
	constructor(langState, score, maxScore, quizState) {
		super({
			tag: 'div',
			className: 'results'
		});
		this.score = score;
		this.maxScore = maxScore;
		this.updateLang = (val) => {
			if (this.quizState.get().success) {
				this.grats.elem.textContent = textContent[val].congrats_msg;
				this.message.elem.textContent =
                    val === 'ru'
                    	? `Вы прошли викторину и набрали ${this.score} из ${this.maxScore} возможных баллов :)`
                    	: `You've finished the quiz and got ${this.score} out of ${this.maxScore} possible points`;
			}
			else {
				this.grats.elem.textContent = '';
				this.message.elem.textContent = textContent[val].results_error;
			}
			this.newGameBtn.elem.textContent = textContent[val].new_game_btn;
		};
		this.wrapper = new BaseElement({
			tag: 'div',
			className: 'results-wrapper'
		});
		this.lang = langState;
		this.quizState = quizState;
		this.textContainer = new BaseElement({
			tag: 'div',
			className: 'results__text'
		});
		this.grats = new BaseElement({
			tag: 'h3',
			className: 'results__grats'
		});
		this.message = new BaseElement({
			tag: 'p',
			className: 'results__message'
		});
		this.crow = new BaseElement({
			tag: 'img',
			className: 'results__crow',
			attr: {
				src: crow
			}
		});
		this.martini = new BaseElement({
			tag: 'img',
			className: 'results__img',
			attr: {
				src: martini
			}
		});
		this.newGameBtn = new BaseElement({
			tag: 'button',
			className: 'quiz__next-lvl',
			attr: {
				onclick: () => {
					window.location.href = '#quiz';
				}
			}
		});
	}
	render() {
		this.updateLang(this.lang.get());
		this.lang.add(this.updateLang);
		this.textContainer.addChildren(this.grats, this.message);
		this.wrapper.addChildren(this.martini.elem, this.textContainer, this.crow.elem);
		this.addChildren(this.wrapper, this.newGameBtn);
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
	}
	destroy() {
		this.lang.remove(this.updateLang);
		super.destroy();
	}
}
