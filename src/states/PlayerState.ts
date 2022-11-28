import { PlayerStateOptions } from '../interfaces/interfaces';
import { Observable } from '../utils/Observable';

export class PlayerState extends Observable<PlayerStateOptions> {
	constructor(private playerState: PlayerStateOptions) {
		super();
	}

	set(options: Partial<PlayerStateOptions>) {
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
