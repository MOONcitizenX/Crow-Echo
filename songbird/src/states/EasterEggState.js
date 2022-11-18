import { Observable } from '../utils/Observable';

export class EasterEggState extends Observable {
	constructor(initialVal) {
		super();
		this.easterEggClickNumber = initialVal;
	}
	set(newVal) {
		this.easterEggClickNumber = newVal;
		this.emit(this.easterEggClickNumber);
	}
	get() {
		return this.easterEggClickNumber;
	}
}
