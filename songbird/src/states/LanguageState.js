import { Observable } from '../utils/Observable';

export class LanguageState extends Observable {
	constructor(initialVal) {
		super();
		this.lang = initialVal;
	}
	set(newVal) {
		this.lang = newVal;
		this.emit(this.lang);
	}
	get() {
		return this.lang;
	}
}
