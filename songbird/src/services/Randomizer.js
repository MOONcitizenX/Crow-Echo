export class Randomizer {
	constructor(min, max) {
		this.randomNum = Math.floor(Math.random() * (max - min)) + min;
	}
	get() {
		return this.randomNum;
	}
}
