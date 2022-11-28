export const setLS = (key: string, value: any) => {
	localStorage.setItem(key, JSON.stringify(value));
};

export const getLS = (key: string) => {
	if (localStorage.getItem(key)) {
		return JSON.parse(localStorage.getItem(key));
	}
};

export const removeLS = (key: string) => {
	if (localStorage.getItem(key)) {
		localStorage.removeItem(key);
	}
};
