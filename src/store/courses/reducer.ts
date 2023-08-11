import { CourseAction, CoursesActionTypes, CourseType } from './types';

export const coursesInitialState = { data: [] as CourseType[] };

export const coursesReducer = (
	state = coursesInitialState,
	action: CourseAction
) => {
	switch (action.type) {
		case CoursesActionTypes.SAVE_COURSES:
			return { ...state, data: action.payload };
		case CoursesActionTypes.ADD_COURSE:
			return {
				...state,
				data: [...state.data, action.payload],
			};
		case CoursesActionTypes.DELETE_COURSE:
			return state; //todo
		default:
			return state;
	}
};
