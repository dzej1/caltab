const currentDate = new Date();

export const today =
	currentDate.getFullYear() +
	"-" +
	currentDate.getMonth() +
	1 +
	"-" +
	currentDate.getDate();
