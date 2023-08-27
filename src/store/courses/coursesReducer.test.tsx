import mockedCoursesData from '../../components/test-utils/mockedCoursesData.json';
import mockedAuthorsData from '../../components/test-utils/mockedAuthorsData.json';
import { coursesReducer } from './reducer';
import { CourseAction } from './types';
import { saveCoursesAction } from './actions';

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

	it('should handle SAVE_COURSE and returns new state', () => {
		const newCourse = {
			title: 'test course',
			description: 'test desc',
			duration: 1,
			authors: ['40b21bd5-cbae-4f33-b154-0252b1ae03a9'],
			creationDate: '27/08/2023',
			id: 'da9dd045-333d-42a8-90fe-6bbb60347ef5',
		};

		expect(
			coursesReducer(initialState.courses, saveCoursesAction(newCourse))
		).toEqual({
			...initialState.courses,
			data: [...initialState.courses.data, newCourse],
		});
	});
});
