// export const SAVE_COURSES = 'SAVE_COURSES';
// export const DELETE_COURSE = 'DELETE_COURSE';
// export const ADD_COURSE = 'ADD_COURSE';

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
	DELETE_COURSE = 'DELETE_COURSE',
	ADD_COURSE = 'ADD_COURSE',
}

export interface SaveCourses {
	type: CoursesActionTypes.SAVE_COURSES;
	payload: CourseType[];
}

export interface AddCourse {
	type: CoursesActionTypes.ADD_COURSE;
	payload: CourseType;
}

export interface DeleteCourse {
	type: CoursesActionTypes.DELETE_COURSE;
	payload: string;
}

export type CourseAction = SaveCourses | AddCourse | DeleteCourse;
