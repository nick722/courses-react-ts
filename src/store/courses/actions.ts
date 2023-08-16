import {
	AddCourseFulfilled,
	AddCoursePending,
	CoursesActionTypes,
	CourseType,
	UpdateCourse,
} from './types';

export const addCoursePending = (): AddCoursePending => ({
	type: CoursesActionTypes.ADD_COURSE_PENDING,
});

export const addCourseFulfilled = (): AddCourseFulfilled => ({
	type: CoursesActionTypes.ADD_COURSE_FULFILLED,
});

export const addCourseRejected = (payload) => ({
	type: CoursesActionTypes.ADD_COURSE_REJECTED,
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

export const updateCourseAction = (courseData: CourseType): UpdateCourse => ({
	type: CoursesActionTypes.UPDATE_COURSE,
	payload: courseData,
});
