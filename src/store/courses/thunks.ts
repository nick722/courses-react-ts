import { BASE_URL } from '../../services';
import axios from 'axios';
import {
	deleteCourseAction,
	deleteCourseFailed,
	saveCoursesAction,
} from './actions';
import { getBearerToken } from '../../helpers/getBearerToken';

const bearerToken = getBearerToken();

export const getCoursesAll = () => async (dispatch) => {
	const url = `${BASE_URL}/courses/all`;

	try {
		const response = await axios.get(url);
		const courses = response.data.result;
		dispatch(saveCoursesAction(courses));
	} catch (error) {
		console.log(error);
	}
};

export const deleteCourse = (id) => async (dispatch) => {
	const deleteUrl = `${BASE_URL}/courses/{${id}}`;
	const config = {
		headers: {
			Authorization: bearerToken,
		},
	};

	try {
		const response = await axios.delete(deleteUrl, config);
		console.log('delete response', response);
		if (!response.data.successful) {
			throw new Error(response.data.result);
		}
		// dispatch(deleteCourseAction(id));
		return response;
	} catch (error) {
		console.log(error);
		dispatch(deleteCourseFailed(error.message));
		// return error;
	}
};
