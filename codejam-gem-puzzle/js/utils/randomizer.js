export const randomNum = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

export const shuffleArray = (unshuffledArr) =>
	unshuffledArr
		.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);
