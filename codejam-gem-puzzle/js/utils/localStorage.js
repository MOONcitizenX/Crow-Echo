import { state } from './constants';

export const getLocalStorageItems = () => {
	if (localStorage.getItem('state')) {
		state = JSON.parse(localStorage.getItem('state'));
	}
};

export const setLocalStorageItems = () => {
	localStorage.setItem('state', JSON.stringify(state));
};
