import { Observable } from '../utils/Observable';

export class LanguageState extends Observable<'ru' | 'en'> {
	private lang;
	constructor(initialVal: 'ru' | 'en') {
		super();
		this.lang = initialVal;
	}

	set(newVal: 'ru' | 'en') {
		this.lang = newVal;
		this.emit(this.lang);
	}

	get() {
		return this.lang;
	}
}
