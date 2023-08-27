import React from 'react';
import mockedCoursesData from '../test-utils/mockedCoursesData.json';
import mockedAuthorsData from '../test-utils/mockedAuthorsData.json';
import { wrapRender } from '../test-utils/wrapRender';
import Courses from './Courses';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/routes';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...(jest.requireActual('react-router-dom') as any),
	useNavigate: () => mockedUseNavigate,
}));

const initialState = {
	courses: { data: mockedCoursesData },
	authors: { data: mockedAuthorsData },
	user: {
		data: {
			isAuth: true,
			email: 'admin@email.com',
		},
	},
};

describe('Courses', () => {
	beforeEach(() => {
		wrapRender(<Courses />, { initialState });
	});

	it('should display amount of CourseCard equal length of courses array', () => {
		const CourseCard = screen.getAllByTestId('CourseCard');

		expect(CourseCard.length).toEqual(initialState.courses.data.length);
	});

	it('should navigate to CourseForm  after a click on the "Add new course" button', async () => {
		const addNewCourseButton = screen.getByRole('button', {
			name: /add new course/i,
		});

		userEvent.click(addNewCourseButton);

		expect(mockedUseNavigate).toBeCalledWith(APP_ROUTES.CREATE_COURSE);
	});
});
