import { BASE_URL } from '../../services';
import axios from 'axios';
import {
	deleteCourseFulfilled,
	deleteCourseFailed,
	saveCoursesAction,
	deleteCoursePending,
	addCoursePending,
	addCourseRejected,
	addCourseFulfilled,
} from './actions';
import { getBearerToken } from '../../helpers/getBearerToken';
import { Course } from '../../types';

const bearerToken = getBearerToken();

const adminAuthorizationConfig = {
	headers: {
		Authorization: bearerToken,
	},
};

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
	const deleteUrl = `${BASE_URL}/courses/${id}`;

	dispatch(deleteCoursePending());

	try {
		const response = await axios.delete(deleteUrl, adminAuthorizationConfig);
		if (!response.data.successful) {
			throw new Error(response.data.result);
		}
		dispatch(deleteCourseFulfilled(id));
		return response;
	} catch (error) {
		dispatch(deleteCourseFailed(error.message));
	}
};

export const addCourse = (course: Course) => async (dispatch) => {
	const addCourseUrl = `${BASE_URL}/courses/add`;

	dispatch(addCoursePending());

	try {
		const response = await axios.post(
			addCourseUrl,
			course,
			adminAuthorizationConfig
		);
		dispatch(addCourseFulfilled(course));
	} catch (error) {
		dispatch(addCourseRejected(error.message));
	}
};
