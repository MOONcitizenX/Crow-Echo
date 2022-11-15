import { BaseElement } from '../../BaseElement';
import { getRandomNum } from '../../services/Randomizer';
import textContent from '../../textContent';
import './Home.scss';
import crow from '../../assets/svg/crow.svg';

export class Home extends BaseElement {
	constructor(langState, quizState) {
		super({
			tag: 'div',
			className: 'home'
		});
		this.quizState = quizState;
		this.update = (val) => {
			this.quote.elem.textContent = textContent[val].quote;
			this.newGameBtn.elem.textContent = textContent[val].new_game_btn;
		};
		this.quote = new BaseElement({
			tag: 'p',
			className: 'home__quote',
			textContent: ''
		});
		this.crowsImg = new BaseElement({
			tag: 'div',
			className: 'home__img'
		});
		this.bottomContainer = new BaseElement({
			tag: 'div',
			className: 'home__bottom'
		});
		this.newGameBtn = new BaseElement({
			tag: 'button',
			className: 'quiz__next-lvl',
			attr: {
				onclick: () => {
					window.location.href = '#quiz';
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
			}
		});
		this.crow = new BaseElement({
			tag: 'img',
			className: 'home__crow',
			attr: {
				src: crow
			}
		});
		this.lang = langState;
	}
	render() {
		this.update(this.lang.get());
		this.lang.add(this.update);
		this.bottomContainer.addChildren(this.newGameBtn, this.crow.elem);
		this.addChildren(this.quote, this.crowsImg.elem, this.bottomContainer);
	}
	destroy() {
		this.lang.remove(this.update);
		super.destroy();
	}
}
