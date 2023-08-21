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
	updateCoursePending,
	updateCourseFulfilled,
	updateCourseRejected,
} from './actions';
import { Course } from '../../types';
import { getAdminAuthorizationConfig } from '../../helpers/adminAuthorizationConfig';

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
		const response = await axios.delete(
			deleteUrl,
			getAdminAuthorizationConfig()
		);
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
			getAdminAuthorizationConfig()
		);
		const addedCourse = response.data.result;
		dispatch(addCourseFulfilled(addedCourse));
	} catch (error) {
		dispatch(addCourseRejected(error.message));
	}
};

export const updateCourse = (course: Course) => async (dispatch) => {
	const updateCourseUlr = `${BASE_URL}/courses/{id}`;

	dispatch(updateCoursePending());

	try {
		const response = await axios.put(
			updateCourseUlr,
			course,
			getAdminAuthorizationConfig()
		);
		const updatedCourse = response.data.result;
		dispatch(updateCourseFulfilled(updatedCourse));
	} catch (error) {
		dispatch(updateCourseRejected(error.message));
	}
};
