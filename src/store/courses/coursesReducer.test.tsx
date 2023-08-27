import mockedCoursesData from '../../components/test-utils/mockedCoursesData.json';
import mockedAuthorsData from '../../components/test-utils/mockedAuthorsData.json';
import { coursesReducer } from './reducer';
import { CourseAction } from './types';

const initialState = {
	courses: { data: mockedCoursesData, error: '', loading: false },
	authors: { data: mockedAuthorsData },
	user: {
		data: {
			isAuth: true,
			email: 'admin@email.com',
		},
	},
};

describe('coursesReducer', () => {
	it('should return the initial state', () => {
		expect(coursesReducer(initialState.courses, {} as CourseAction)).toEqual(
			initialState.courses
		);
	});
});
