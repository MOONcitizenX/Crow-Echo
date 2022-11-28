export const getSecondsFromPercent = (
	duration: number,
	percent: number
): number => {
	const result = (parseInt(String(duration)) / 100) * percent;

	return result;
};

export const getTimeCodeFromNum = (seconds: number) => {
	if (isNaN(seconds)) {
		return '00:00';
	}
	const min = Math.floor(seconds / 60);
	const sec = Math.floor(seconds - min * 60);

	return `${min.toString().padStart(2, '0')}:${sec
		.toString()
		.padStart(2, '0')}`;
};

export const getPercentFromSeconds = (
	current: number,
	duration: number
): number => {
	return current / (duration / 100);
};
