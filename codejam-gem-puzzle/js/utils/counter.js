import { state } from './constants.js';

const timeCounter = () => {
	state.timeSpent += 1;
	let seconds =
		Math.floor(state.timeSpent) - Math.floor(state.timeSpent / 60) * 60;
	let minutes = Math.floor(state.timeSpent / 60);
	outprintTime(minutes, seconds);
};

export const startTimer = () => {
	if (state.timeSpent <= 0) {
		setInterval(timeCounter, 1000);
	}
};

export const stopTimer = () => {
	clearInterval(timeCounter);
};

export const outprintTime = (minutes, seconds) => {
	console.log(minutes, seconds);
};
