import { CourseAction, CoursesActionTypes, CourseType } from './types';

export const coursesInitialState = { data: [] as CourseType[], error: '' };

export const coursesReducer = (
	state = coursesInitialState,
	action: CourseAction
) => {
	switch (action.type) {
		case CoursesActionTypes.SAVE_COURSES:
			return { ...state, error: '', data: action.payload };
		case CoursesActionTypes.ADD_COURSE:
			return {
				...state,
				error: null,
				data: [...state.data, action.payload],
			};
		case CoursesActionTypes.DELETE_COURSE_PENDING:
			return {
				...state,
				error: null,
			};
		case CoursesActionTypes.DELETE_COURSE_FULFILLED:
			return {
				...state,
				error: null,
				data: state.data.filter((course) => course.id !== action.payload),
			};
		case CoursesActionTypes.DELETE_COURSE_FAILED:
			// console.log('delete action.payload', action.payload);
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
