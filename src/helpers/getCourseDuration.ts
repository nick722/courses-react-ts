const getCourseDuration = (durationInMin: number): string => {
	const hours = Math.floor(durationInMin / 60);
	const minutes = durationInMin % 60;
	const formatedHours = hours > 10 ? hours : `0${hours}`;
	const formatedMinutes = minutes > 10 ? minutes : `0${minutes}`;
	const formatedHoursStr = hours === 1 ? 'hour' : 'hours';

	return `${formatedHours}:${formatedMinutes} ${formatedHoursStr}`;
};

export default getCourseDuration;
