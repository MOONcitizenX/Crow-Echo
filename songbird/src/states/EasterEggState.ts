import { Observable } from '../utils/Observable';

export class EasterEggState extends Observable<number> {
	private easterEggClickNumber;
	constructor(initialVal: number) {
		super();
		this.easterEggClickNumber = initialVal;
	}

	set(newVal: number) {
		this.easterEggClickNumber = newVal;
		this.emit(this.easterEggClickNumber);
	}

	get() {
		return this.easterEggClickNumber;
	}
}
