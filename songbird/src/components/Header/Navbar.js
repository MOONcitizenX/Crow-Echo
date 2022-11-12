import { BaseElement } from '../../BaseElement';
import textContent from '../../textContent';

export class Navbar extends BaseElement {
	constructor(langState) {
		super({
			tag: 'div',
			className: 'nav'
		});
		this.onHashChangeHandler = () => {
			const hashPath = window.location.hash;
			this.children.forEach((child) => {
				child.elem.classList.remove('nav__item_active');
			});
			if (hashPath === '#home' || hashPath === '') {
				this.mainLink.elem.classList.add('nav__item_active');
			}
			if (hashPath === '#quiz') {
				this.quizLink.elem.classList.add('nav__item_active');
			}
			if (hashPath === '#gallery') {
				this.galleryLink.elem.classList.add('nav__item_active');
			}
		};
		this.update = (val) => {
			this.mainLink.elem.textContent = textContent[val].home;
			this.quizLink.elem.textContent = textContent[val].quiz;
			this.galleryLink.elem.textContent = textContent[val].gallery;
		};
		this.lang = langState;
		this.mainLink = new BaseElement({
			tag: 'a',
			className: 'nav__item nav__item_main',
			attr: {
				href: '#home'
			}
		});
		this.quizLink = new BaseElement({
			tag: 'a',
			className: 'nav__item nav__item_play',
			attr: {
				href: '#quiz'
			}
		});
		this.galleryLink = new BaseElement({
			tag: 'a',
			className: 'nav__item nav__item_gallery',
			attr: {
				href: '#gallery'
			}
		});
	}
	render() {
		this.addChildren(this.mainLink, this.quizLink, this.galleryLink);
		this.update(this.lang.get());
		this.lang.add(this.update);
		window.addEventListener('hashchange', this.onHashChangeHandler);
		this.onHashChangeHandler();
	}
}
