import { Observable } from '../utils/Observable';

export class ThemeState extends Observable<string> {
	private theme;
	constructor(initialVal: 'dark' | 'light') {
		super();
		this.theme = initialVal;
	}

	set(newVal: 'dark' | 'light') {
		this.theme = newVal;
		this.emit(this.theme);
	}

	get() {
		return this.theme;
	}
}
