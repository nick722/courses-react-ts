import { CourseAction, CoursesActionTypes, CourseType } from './types';

export const coursesInitialState = {
	data: [] as CourseType[],
	error: '',
	loading: false,
};

export const coursesReducer = (
	state = coursesInitialState,
	action: CourseAction
) => {
	switch (action.type) {
		case CoursesActionTypes.SAVE_COURSES:
			return { ...state, error: '', data: action.payload };
		case CoursesActionTypes.ADD_COURSE_PENDING:
			return {
				...state,
				error: null,
				loading: true,
			};
		case CoursesActionTypes.ADD_COURSE_FULFILLED:
			return {
				...state,
				error: null,
				loading: false,
				data: [...state.data, action.payload],
			};
		case CoursesActionTypes.ADD_COURSE_REJECTED:
			return { ...state, loading: false, error: action.payload };
		case CoursesActionTypes.DELETE_COURSE_PENDING:
			return {
				...state,
				loading: true,
				error: null,
			};
		case CoursesActionTypes.DELETE_COURSE_FULFILLED:
			return {
				...state,
				loading: false,
				error: null,
				data: state.data.filter((course) => course.id !== action.payload),
			};
		case CoursesActionTypes.DELETE_COURSE_FAILED:
			// console.log('delete action.payload', action.payload);
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
