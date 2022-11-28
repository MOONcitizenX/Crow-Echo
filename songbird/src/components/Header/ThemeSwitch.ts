import { BaseElement } from '../../BaseElement';
import { ThemeState } from '../../states/ThemeState';

export class ThemeSwitch extends BaseElement {
	private theme;
	private input;
	private label;
	constructor(themeState: ThemeState) {
		super({
			tag: 'div',
			className: 'theme-switch'
		});
		this.theme = themeState;

		this.input = new BaseElement({
			tag: 'input',
			className: 'theme-switch__input',
			attr: {
				type: 'checkbox',
				id: 'themeSwitch',
				onchange: () => {
					themeState.set(
						themeState.get() === 'dark' ? 'light' : 'dark'
					);
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

	update = (val: 'dark' | 'light') => {
		const input = this.input.elem as HTMLInputElement;
		val === 'dark'
			? document.body.classList.remove('light')
			: document.body.classList.add('light');
		input.checked = val === 'dark' ? false : true;
	};
}
