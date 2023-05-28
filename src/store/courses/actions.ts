import { AddCourse, CoursesActionTypes, CourseType } from './types';

export const addCourseAction = (courseData: CourseType): AddCourse => ({
	type: CoursesActionTypes.ADD_COURSE,
	payload: courseData,
});
export const deleteCourseAction = (payload) => ({
	type: CoursesActionTypes.DELETE_COURSE,
	payload,
});

export const saveCoursesAction = (payload) => ({
	type: CoursesActionTypes.SAVE_COURSES,
	payload,
});
