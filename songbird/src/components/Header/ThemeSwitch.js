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
		this.input = new BaseElement({
			tag: 'input',
			className: 'theme-switch__input',
			attr: {
				type: 'checkbox',
				id: 'themeSwitch',
				onchange: () => {
					themeState.set(themeState.get() === 'dark' ? 'light' : 'dark');
				}
			}
		});
		this.label = new BaseElement({
			tag: 'label',
			className: 'theme-switch__label',
			attr: {
				htmlFor: 'themeSwitch'
			}
		});
	}
	render() {
		this.theme.add(this.update);
		this.update(this.theme.get());
		this.addChildren(this.input.elem, this.label.elem);
	}
}
