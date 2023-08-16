export type CourseType = {
	id: string;
	title: string;
	description: string;
	creationData: string;
	duration: number;
	authors: string[];
};

export enum CoursesActionTypes {
	SAVE_COURSES = 'SAVE_COURSES',
	DELETE_COURSE_PENDING = 'DELETE_COURSE_PENDING',
	DELETE_COURSE_FULFILLED = 'DELETE_COURSE_FULFILLED',
	DELETE_COURSE_FAILED = 'DELETE_COURSE_FAILED',
	ADD_COURSE = 'ADD_COURSE',
	UPDATE_COURSE = 'UPDATE_COURSE',
}

export interface UpdateCourse {
	type: CoursesActionTypes.UPDATE_COURSE;
	payload: CourseType;
}

export interface SaveCourses {
	type: CoursesActionTypes.SAVE_COURSES;
	payload: CourseType[];
}

export interface AddCourse {
	type: CoursesActionTypes.ADD_COURSE;
	payload: CourseType;
}

export interface DeleteCoursePending {
	type: CoursesActionTypes.DELETE_COURSE_PENDING;
}

export interface DeleteCourseFulfilled {
	type: CoursesActionTypes.DELETE_COURSE_FULFILLED;
	payload: string;
}

export interface DeleteCourseFailed {
	type: CoursesActionTypes.DELETE_COURSE_FAILED;
	payload: string;
}

export type CourseAction =
	| SaveCourses
	| AddCourse
	| DeleteCoursePending
	| DeleteCourseFulfilled
	| DeleteCourseFailed;
