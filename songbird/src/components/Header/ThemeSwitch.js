import { BaseElement } from '../../BaseElement';

export class ThemeSwitch extends BaseElement {
	constructor(themeState) {
		super({
			tag: 'div',
			className: 'theme-switch'
		});
		this.update = (val) => {
			val === 'dark'
				? document.body.classList.remove('light')
				: document.body.classList.add('light');
		};
		this.theme = themeState;
		this.theme.add(this.update);
		this.input = new BaseElement({
			tag: 'input',
			className: 'theme-switch__input',
			attr: {
				type: 'checkbox',
				id: 'themeSwitch'
			}
		});
		this.label = new BaseElement({
			tag: 'label',
			className: 'theme-switch__label',
			attr: {
				htmlFor: 'themeSwitch',
				onclick: () => {
					themeState.set(themeState.get() === 'dark' ? 'light' : 'dark');
				}
			}
		});
	}
	render() {
		this.elem.append(this.input.elem, this.label.elem);
	}
}
