import { Observable } from '../utils/Observable';

export class ThemeState extends Observable {
	constructor(initialVal) {
		super();
		this.theme = initialVal;
	}
	set(newVal) {
		this.theme = newVal;
		this.emit(this.theme);
	}
	get() {
		return this.theme;
	}
}
