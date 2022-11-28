import { BaseElement } from '../../../../BaseElement';
import birdsData from '../../../../birdsData';
import { PlayerStateOptions } from '../../../../interfaces/interfaces';
import { PlayerState } from '../../../../states/PlayerState';
import {
	getPercentFromSeconds,
	getSecondsFromPercent,
	getTimeCodeFromNum
} from '../../../../utils/TrackTimeHelpers';
import './AudioPlayer.scss';

export class AudioPlayer extends BaseElement {
	private play;
	private playIcon;
	private playContainer;
	private timeLine;
	private time;
	private timeCurrent;
	private timeEnd;
	private vol;
	private volIcon;
	private volLine;
	private audio;
	private src;

	constructor(private playerState: PlayerState, baseClass: string) {
		super({
			tag: 'div',
			className: `player ${baseClass}`
		});
		this.audio = new Audio(this.playerState.get().src);
		this.audio.onended = () => {
			this.playerState.set({ isPaused: true });
		};
		this.audio.ontimeupdate = (e: any) => {
			const audio = e.target === null ? e.path[0] : e.target;
			const { currentTime, duration } = audio;

			this.playerState.set({
				timeCurrent: this.audio.currentTime,
				timeWidth: getPercentFromSeconds(currentTime, duration)
			});
			const timeInput = this.timeLine.elem as HTMLInputElement;
			timeInput.style.backgroundSize = `${
				this.playerState.get().timeWidth
			}% 100%`;
			timeInput.value = this.playerState.get().timeWidth.toString();
		};
		this.audio.onplaying = () => {
			this.playerState.set({
				isPaused: false
			});
		};
		this.audio.onpause = () => {
			this.playerState.set({
				isPaused: true
			});
		};

		this.audio.onloadedmetadata = (e: Event) => {
			this.timeEnd.elem.textContent = getTimeCodeFromNum(
				Math.round(this.audio.duration)
			);
		};

		this.play = new BaseElement({
			tag: 'div',
			className: 'player__play'
		});
		this.playIcon = new BaseElement({
			tag: 'div',
			className: 'player__play-icon',
			attr: {
				onclick: () => {
					this.playPauseAudio();
				}
			}
		});

		this.playContainer = new BaseElement({
			tag: 'div',
			className: 'player__play-container'
		});
		this.timeLine = new BaseElement({
			tag: 'input',
			className: 'player__time-line time-line',
			attr: {
				type: 'range',
				min: 0,
				max: 100,
				value: 0,
				oninput: (e: InputEvent) => {
					const target = e.target as HTMLInputElement;
					this.playerState.set({
						timeWidth: +target.value,
						timeCurrent: getSecondsFromPercent(
							this.audio.duration,
							+target.value
						)
					});

					this.audio.currentTime = getSecondsFromPercent(
						this.audio.duration,
						+target.value
					);
				}
			}
		});
		this.time = new BaseElement({
			tag: 'div',
			className: 'player__time'
		});
		this.timeCurrent = new BaseElement({
			tag: 'p',
			className: 'player__time_current',
			textContent: this.playerState.get().timeCurrent.toString()
		});
		this.timeEnd = new BaseElement({
			tag: 'p',
			className: 'player__time_end',
			textContent: '00:00'
		});
		this.vol = new BaseElement({
			tag: 'div',
			className: 'player__vol'
		});
		this.volIcon = new BaseElement({
			tag: 'div',
			className: 'player__vol-icon',
			attr: {
				onclick: (e: Event) => {
					if (this.playerState.get().isMuted === false) {
						this.playerState.set({
							isMuted: true
						});
					} else {
						this.playerState.set({ isMuted: false });
					}
				}
			}
		});
		this.volLine = new BaseElement({
			tag: 'input',
			className: 'player__vol-line vol-line',
			attr: {
				type: 'range',
				min: 0,
				max: 100,
				oninput: (e: InputEvent) => {
					const target = e.target as HTMLInputElement;
					const vol = +target.value / 100;
					this.playerState.set({
						volume: vol,
						isMuted: vol === 0
					});
				}
			}
		});
		this.src = this.playerState.get().src;
	}

	async playPauseAudio() {
		if (this.audio.paused && this.playerState.get().isPaused) {
			this.playerState.set({ isPaused: false });
			return this.audio.play().catch((e) => {
				if (e.name === 'AbortError') {
					return;
				}
			});
		}
		if (!this.audio.paused && !this.playerState.get().isPaused) {
			this.playerState.set({
				isPaused: true,
				timeCurrent: this.audio.currentTime
			});
			this.audio.pause();
		}
	}

	render() {
		this.time.addChildren(this.timeCurrent, this.timeEnd);
		this.playContainer.addChildren(this.timeLine, this.time);
		this.play.addChildren(this.playIcon, this.playContainer);
		this.vol.addChildren(this.volIcon, this.volLine);
		this.addChildren(this.play, this.vol);
		this.playerState.add(this.update);
		this.update(this.playerState.get());
	}

	update = (state: PlayerStateOptions) => {
		const timeInput = this.timeLine.elem as HTMLInputElement;
		timeInput.style.backgroundSize = `${state.timeWidth}% 100%`;
		timeInput.value = state.timeWidth.toString();
		const volInput = this.volLine.elem as HTMLInputElement;
		volInput.style.backgroundSize = `${state.volume * 100}% 100%`;
		volInput.value = (state.volume * 100).toString();
		this.timeCurrent.elem.textContent = getTimeCodeFromNum(
			Math.round(state.timeCurrent)
		);
		this.timeEnd.elem.textContent = getTimeCodeFromNum(
			Math.round(this.audio.duration)
		);

		if (this.src !== state.src) {
			this.audio.src = state.src;
			this.src = state.src;
			this.audio.currentTime = state.timeCurrent;
		}

		if (!this.audio.paused && state.isPaused) {
			this.audio.pause();
		}

		if (!state.isPaused) {
			this.playIcon.elem.classList.add('pause');
		} else {
			this.playIcon.elem.classList.remove('pause');
		}

		if (state.isMuted) {
			this.audio.volume = 0;
			this.volIcon.elem.classList.add('mute');
			volInput.style.backgroundSize = '0% 100%';
			volInput.value = (0).toString();
		} else {
			this.volIcon.elem.classList.remove('mute');
			this.audio.volume = state.volume;
			volInput.style.backgroundSize = `${state.volume * 100}% 100%`;
			volInput.value = (state.volume * 100).toString();
		}
	};

	destroy() {
		this.playerState.remove(this.update);
		this.audio.src = '';
		super.destroy();
	}
}
