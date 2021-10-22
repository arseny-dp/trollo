const makeCounter = (start = 0) => {
	let count = start;
	return () => {
		return count++;
	}
}

export const boardCounter = makeCounter(3);
export const storiesCounter = makeCounter(4);
export const tasksCounter = makeCounter(6);