import {
	ADD_COURSE,
	CourseAction,
	CoursesActionTypes,
	CourseType,
} from './types';

export const initialCoursesState = [] as CourseType[];

export const coursesReducer = (
	state = initialCoursesState,
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
