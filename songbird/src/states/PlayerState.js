import { Observable } from '../utils/Observable';

export class PlayerState extends Observable {
	constructor(playerState) {
		super();
		this.playerState = playerState;
	}
	set(options) {
		this.playerState = {
			...this.playerState,
			...options
		};
		this.emit(this.playerState);
	}
	get() {
		return this.playerState;
	}
}
