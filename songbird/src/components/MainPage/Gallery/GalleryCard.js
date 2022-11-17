import { BaseElement } from '../../../BaseElement';
import birdsData from '../../../birdsData';
import { PlayerState } from '../../../states/PlayerState';
import { AudioPlayer } from '../Quiz/QuestionCard/AudioPlayer';

export class GalleryCard extends BaseElement {
	constructor(langState, baseClass, index) {
		super({
			tag: 'div',
			className: `${baseClass} bird-card`
		});
		this.index = index;
		this.updateLang = (val) => {
			const currentBird = birdsData.flat(2)[this.index];
			this.birdName.elem.textContent =
                currentBird[`name${val === 'ru' ? '' : '_en'}`];
			this.birdDesc.elem.textContent =
                currentBird[`description${val === 'ru' ? '' : '_en'}`];
		};
		this.lang = langState;
		this.playerState = new PlayerState({
			volume: 0.75,
			isMuted: false,
			timeCurrent: 0,
			isPaused: true,
			src: birdsData.flat(2)[this.index].audio,
			timeWidth: 0
		});
		this.player = new AudioPlayer(this.playerState, 'bird-card');
		this.birdImg = new BaseElement({
			tag: 'img',
			className: 'bird-card__img',
			attr: {
				src: birdsData.flat(2)[this.index].image,
				alt: birdsData.flat(2)[this.index].name_en
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
			className: 'bird-card__name-latin',
			textContent: birdsData.flat(2)[this.index].species
		});
		this.birdDesc = new BaseElement({
			tag: 'p',
			className: 'bird-card__description'
		});
	}
	render() {
		this.birdNameContainer.addChildren(this.birdName, this.birdNameLatin);
		this.player.render();
		this.addChildren(this.birdImg, this.birdNameContainer, this.player, this.birdDesc);
		this.lang.add(this.updateLang);
		this.updateLang(this.lang.get());
	}
	destroy() {
		this.lang.remove(this.updateLang);
		super.destroy();
	}
}
