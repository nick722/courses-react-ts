import axios from 'axios';

export const BASE_URL = 'http://localhost:4000';

export const getUsers = async () => {
	// const url = `${BASE_URL}/users/me`;
	// const response = await fetch(url);
};

export const getCourses = async () => {
	const url = `${BASE_URL}/courses/all`;

	try {
		const response = await axios.get(url);
		return response.data.result;
	} catch (error) {
		console.log(error);
	}
};
