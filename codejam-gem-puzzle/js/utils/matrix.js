export const getMatrixFromArray = (arr, matrixSideSize) => {
	const matrix = [];

	for (let i = 0; i < matrixSideSize; i++) {
		matrix.push([]);
	}

	let y = 0,
		x = 0;

	for (let i = 0; i < arr.length; i++) {
		if (x >= matrixSideSize) {
			y++;
			x = 0;
		}
		matrix[y][x] = arr[i];
		x++;
	}
	return matrix;
};
