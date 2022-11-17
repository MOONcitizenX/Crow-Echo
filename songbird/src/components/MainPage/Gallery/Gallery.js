import { BaseElement } from '../../../BaseElement';
import birdsData from '../../../birdsData';
import './Gallery.scss';
import '../Quiz/QuestionCard/BirdInfoCard/BirdInfoCard.scss';
import { GalleryCard } from './GalleryCard';

export class Gallery extends BaseElement {
	constructor(langState) {
		super({
			tag: 'div',
			className: 'gallery'
		});
		this.lang = langState;
	}
	render() {
		const cards = birdsData.flat(2).map((_card, ind) => {
			const card = new GalleryCard(this.lang, 'gallery', ind);
			card.render();
			return card;
		});
		this.addChildren(...cards);
	}
}
