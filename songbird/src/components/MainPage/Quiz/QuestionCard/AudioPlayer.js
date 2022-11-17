import { BaseElement } from '../../../../BaseElement';
import { getPercentFromSeconds, getSecondsFromPercent, getTimeCodeFromNum } from '../../../../utils/TrackTimeHelpers';
import './AudioPlayer.scss';

export class AudioPlayer extends BaseElement {
	constructor(playerState, baseClass) {
		super({
			tag: 'div',
			className: `player ${baseClass}`
		});
		this.playerState = playerState;
		this.update = (state) => {
			this.timeLine.elem.style.backgroundSize = `${state.timeWidth}% 100%`;
			this.volLine.elem.style.backgroundSize = `${state.volume * 100}% 100%`;
			this.timeCurrent.elem.textContent = getTimeCodeFromNum(Math.round(state.timeCurrent));
			this.timeEnd.elem.textContent = getTimeCodeFromNum(Math.round(this.audio.duration));
			if (this.src !== state.src) {
				this.audio.src = state.src;
				this.src = state.src;
				this.audio.currentTime = state.timeCurrent;
			}
			if (state.isPaused) {
				this.audio.pause();
			}
			if (!state.isPaused) {
				this.playIcon.elem.classList.add('pause');
			}
			else {
				this.playIcon.elem.classList.remove('pause');
			}
			if (state.isMuted) {
				this.audio.volume = 0;
				this.volIcon.elem.classList.add('mute');
				this.volLine.elem.style.backgroundSize = '0% 100%';
			}
			else {
				this.volIcon.elem.classList.remove('mute');
				this.audio.volume = state.volume;
				this.volLine.elem.style.backgroundSize = `${state.volume * 100}% 100%`;
			}
		};
		this.audio = new Audio(this.playerState.get().src);
		this.audio.onended = () => {
			this.playerState.set({ isPaused: true });
		};
		this.audio.ontimeupdate = (e) => {
			const audio = e.path[0];
			const { currentTime, duration } = audio;
			this.playerState.set({
				timeCurrent: this.audio.currentTime,
				timeWidth: getPercentFromSeconds(currentTime, duration)
			});
		};
		this.play = new BaseElement({
			tag: 'div',
			className: 'player__play'
		});
		this.playIcon = new BaseElement({
			tag: 'div',
			className: 'player__play-icon',
			attr: {
				onclick: (e) => {
					if (!this.playerState.get().isPaused) {
						this.playerState.set({
							isPaused: true,
							timeCurrent: this.audio.currentTime
						});
						this.audio.pause();
					}
					else {
						this.playerState.set({ isPaused: false });
						this.audio.play();
					}
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
				oninput: (e) => {
					const target = e.target;
					this.playerState.set({
						timeWidth: +target.value,
						timeCurrent: getSecondsFromPercent(this.audio.duration, +target.value)
					});
					this.audio.currentTime = getSecondsFromPercent(this.audio.duration, +target.value);
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
				onclick: (e) => {
					if (this.playerState.get().isMuted === false) {
						this.playerState.set({
							isMuted: true
						});
					}
					else {
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
				oninput: (e) => {
					const target = e.target;
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
	render() {
		this.time.addChildren(this.timeCurrent, this.timeEnd);
		this.playContainer.addChildren(this.timeLine, this.time);
		this.play.addChildren(this.playIcon, this.playContainer);
		this.vol.addChildren(this.volIcon, this.volLine);
		this.addChildren(this.play, this.vol);
		this.playerState.add(this.update);
		this.update(this.playerState.get());
	}
	destroy() {
		this.playerState.remove(this.update);
		this.audio.src = '';
		super.destroy();
	}
}
