import { ADD_COURSE, SAVE_COURSES } from './types';

export const initialCoursesState = [];

export const coursesReducer = (state = initialCoursesState, action) => {
	switch (action.type) {
		case SAVE_COURSES:
			return action.payload;
		case ADD_COURSE:
			return [...state, action.payload];
		default:
			return state;
	}
};
