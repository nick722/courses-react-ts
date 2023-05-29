import { CourseAction, CoursesActionTypes, CourseType } from './types';
import { mockedCoursesList } from '../../constants/mockedCoursesList.js';

export const coursesInitialState = [...mockedCoursesList] as CourseType[];

export const coursesReducer = (
	state = coursesInitialState,
	action: CourseAction
) => {
	switch (action.type) {
		case CoursesActionTypes.SAVE_COURSES:
			return action.payload;
		case CoursesActionTypes.ADD_COURSE:
			return [...state, action.payload];
		default:
			return state;
	}
};
