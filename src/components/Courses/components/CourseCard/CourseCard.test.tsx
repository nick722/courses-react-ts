import { screen } from '@testing-library/react';
import React from 'react';
import CourseCard from './CourseCard';
import { wrapRender } from '../../../test-utils/wrapRender';

const course = {
	id: '1',
	title: 'some title',
	description: 'some description',
	creationDate: '25/08/2023',
	duration: 61,
	authors: [
		'9987de6a-b475-484a-b885-622b8fb88bda',
		'5e0b0f18-32c9-4933-b142-50459b47f09e',
	],
};

const initialState = {
	authors: {
		data: [
			{
				name: 'Kyle',
				id: '9987de6a-b475-484a-b885-622b8fb88bda',
			},
			{
				name: 'Robert',
				id: '5e0b0f18-32c9-4933-b142-50459b47f09e',
			},
		],
	},
};

describe('CourseCard', () => {
	beforeEach(() => {
		wrapRender(
			<CourseCard
				title={course.title}
				description={course.description}
				duration={course.duration}
				creationDate={course.creationDate}
				authorsIds={course.authors}
				id={course.id}
			/>,
			{ initialState }
		);
	});

	it('should display title', () => {
		const title = screen.getByRole('heading', { level: 3 });
		expect(title).toHaveTextContent(course.title);
	});

	it('should display description', () => {
		const description = screen.getByText(course.description);
		expect(description).toBeInTheDocument();
	});

	it('should display duration in the correct format', () => {
		const expectedDurationFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9] hour(s)?$/;
		const duration = screen.getByTestId('duration');
		expect(duration.innerHTML).toMatch(expectedDurationFormat);
	});

	it('should display authors list', () => {
		const authorsList = screen.getByTestId('authorsList');

		initialState.authors.data.map((author) =>
			expect(authorsList).toHaveTextContent(author.name)
		);
	});

	it('should display created date in the correct format', () => {
		// (format: dd.mm.yyyy)
		const expectedCretedDateFormat =
			/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
		const creationDate = screen.getByTestId('creationDate');

		expect(creationDate.innerHTML).toMatch(expectedCretedDateFormat);
		screen.debug(creationDate);
	});
});
