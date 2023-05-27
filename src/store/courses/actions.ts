import {
	AddCourse,
	CoursesActionTypes,
	CoursesActionTypes,
	CourseType,
} from './types';

const addCourseAction = (courseData: CourseType): AddCourse => ({
	type: CoursesActionTypes.ADD_COURSE,
	payload: courseData,
});
const deleteCourseAction = (payload) => ({
	type: CoursesActionTypes.DELETE_COURSE,
	payload,
});
const saveCoursesAction = (payload) => ({
	type: CoursesActionTypes.SAVE_COURSES,
	payload,
});
