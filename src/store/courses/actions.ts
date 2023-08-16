import {
	AddCourse,
	CoursesActionTypes,
	CourseType,
	UpdateCourse,
} from './types';

export const addCourseAction = (courseData: CourseType): AddCourse => ({
	type: CoursesActionTypes.ADD_COURSE,
	payload: courseData,
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
