import {
	AddCourseFulfilled,
	AddCoursePending,
	AddCourseRejected,
	CoursesActionTypes,
	CourseType,
	UpdateCoursePending,
	UpdateCourseFilfilled,
	UpdateCourseRejected,
} from './types';

export const addCoursePending = (): AddCoursePending => ({
	type: CoursesActionTypes.ADD_COURSE_PENDING,
});

export const addCourseFulfilled = (payload): AddCourseFulfilled => ({
	type: CoursesActionTypes.ADD_COURSE_FULFILLED,
	payload,
});

export const addCourseRejected = (payload): AddCourseRejected => ({
	type: CoursesActionTypes.ADD_COURSE_REJECTED,
	payload,
});

export const updateCoursePending = () => ({
	type: CoursesActionTypes.UPDATE_COURSE_PENDING,
});

export const updateCourseFulfilled = (payload) => ({
	type: CoursesActionTypes.UPDATE_COURSE_FULFILLED,
	payload,
});

export const updateCourseRejected = (payload) => ({
	type: CoursesActionTypes.UPDATE_COURSE_REJECTED,
	payload,
});

export const deleteCoursePending = () => ({
	type: CoursesActionTypes.DELETE_COURSE_PENDING,
});

export const deleteCourseFulfilled = (payload) => ({
	type: CoursesActionTypes.DELETE_COURSE_FULFILLED,
	payload,
});

export const deleteCourseFailed = (payload) => ({
	type: CoursesActionTypes.DELETE_COURSE_FAILED,
	payload,
});

export const saveCoursesAction = (payload) => ({
	type: CoursesActionTypes.SAVE_COURSES,
	payload,
});
