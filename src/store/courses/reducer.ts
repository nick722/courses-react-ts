import { CourseAction, CoursesActionTypes, CourseType } from './types';

export const coursesInitialState = [] as CourseType[];

export const coursesReducer = (
	state = coursesInitialState,
	action: CourseAction
) => {
	switch (action.type) {
		case CoursesActionTypes.SAVE_COURSES:
			return action.payload;
		case CoursesActionTypes.ADD_COURSE:
			return [...state, action.payload];
		case CoursesActionTypes.DELETE_COURSE:
			return state; //todo
		default:
			return state;
	}
};
