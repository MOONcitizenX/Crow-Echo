import { BaseElement } from '../../BaseElement';
import { getRandomNum } from '../../services/Randomizer';
import textContent from '../../textContent';
import './Home.scss';
import crow from '../../assets/svg/crow.svg';
import { EasterEggState } from '../../states/EasterEggState';
import crowSound from '../../assets/audio/crow.mp3';

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
			this.crow.elem.title = textContent[val].easter_egg_tooltip;
		};
		this.updateEasterEgg = (val) => {
			if (val === 13) {
				this.crow.elem.classList.add('easter__egg');
				this.easterEggMsg.elem.classList.add('easter__egg');
				this.crowAudio.src = crowSound;
				this.crowAudio.play();
			}
			else {
				this.crow.elem.classList.remove('easter__egg');
				this.easterEggMsg.elem.classList.remove('easter__egg');
				this.crowAudio.src = '';
			}
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
				src: crow,
				alt: 'Crow',
				onclick: () => {
					this.easterEgg.get() !== 13
						? this.easterEgg.set(this.easterEgg.get() + 1)
						: this.easterEgg.set(0);
				}
			}
		});
		this.lang = langState;
		this.easterEgg = new EasterEggState(0);
		this.easterEggMsg = new BaseElement({
			tag: 'a',
			className: 'easter__egg_msg',
			textContent: 'Designed by: 🍒@lyutails',
			attr: {
				href: 'https://github.com/lyutails',
				target: '_blank'
			}
		});
		this.crowAudio = new Audio(crowSound);
		this.crowAudio.onended = () => {
			this.crow.elem.classList.remove('easter__egg');
			this.easterEggMsg.elem.classList.remove('easter__egg');
			this.easterEgg.set(0);
		};
	}
	render() {
		this.update(this.lang.get());
		this.lang.add(this.update);
		this.updateEasterEgg(this.easterEgg.get());
		this.easterEgg.add(this.updateEasterEgg);
		this.bottomContainer.addChildren(this.newGameBtn, this.crow.elem, this.easterEggMsg);
		this.addChildren(this.quote, this.crowsImg.elem, this.bottomContainer);
	}
	destroy() {
		this.lang.remove(this.update);
		super.destroy();
	}
}
