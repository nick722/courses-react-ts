export type CourseType = {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
};

export enum CoursesActionTypes {
	SAVE_COURSES = 'SAVE_COURSES',
	DELETE_COURSE_PENDING = 'DELETE_COURSE_PENDING',
	DELETE_COURSE_FULFILLED = 'DELETE_COURSE_FULFILLED',
	DELETE_COURSE_FAILED = 'DELETE_COURSE_FAILED',
	ADD_COURSE_PENDING = 'ADD_COURSE_PENDING',
	ADD_COURSE_FULFILLED = 'ADD_COURSE_FULFILLED',
	ADD_COURSE_REJECTED = 'ADD_COURSE_REJECTED',
	UPDATE_COURSE_PENDING = 'UPDATE_COURSE_PENDING',
	UPDATE_COURSE_FULFILLED = 'UPDATE_COURSE_FULFILLED',
	UPDATE_COURSE_REJECTED = 'UPDATE_COURSE_REJECTED',
}

export interface SaveCourses {
	type: CoursesActionTypes.SAVE_COURSES;
	payload: CourseType[];
}

export interface AddCoursePending {
	type: CoursesActionTypes.ADD_COURSE_PENDING;
}

export interface AddCourseFulfilled {
	type: CoursesActionTypes.ADD_COURSE_FULFILLED;
	payload: CourseType;
}

export interface AddCourseRejected {
	type: CoursesActionTypes.ADD_COURSE_REJECTED;
	payload: string;
}

export interface UpdateCoursePending {
	type: CoursesActionTypes.UPDATE_COURSE_PENDING;
}

export interface UpdateCourseFilfilled {
	type: CoursesActionTypes.UPDATE_COURSE_FULFILLED;
	payload: CourseType;
}

export interface UpdateCourseRejected {
	type: CoursesActionTypes.UPDATE_COURSE_REJECTED;
	payload: string;
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
	| AddCoursePending
	| AddCourseFulfilled
	| AddCourseRejected
	| UpdateCoursePending
	| UpdateCourseFilfilled
	| UpdateCourseRejected
	| DeleteCoursePending
	| DeleteCourseFulfilled
	| DeleteCourseFailed;
