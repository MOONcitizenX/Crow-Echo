export const setLS = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};
export const getLS = (key) => {
	if (localStorage.getItem(key)) {
		return JSON.parse(localStorage.getItem(key));
	}
};
export const removeLS = (key) => {
	if (localStorage.getItem(key)) {
		localStorage.removeItem(key);
	}
};
