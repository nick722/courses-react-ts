import Header from './Header';
import { getByAltText, screen } from '@testing-library/react';
import { wrapRender } from '../test-utils/wrapRender';
import React from 'react';

const USER_NAME = 'Nick';
const initialState = {
	user: { data: { name: USER_NAME } },
};

describe('Header', () => {
	beforeEach(() => {
		wrapRender(<Header />, { initialState });
		screen.debug();
	});

	it('should have logo', () => {
		const logo = screen.getByAltText('logo');
		expect(logo).toBeInTheDocument();
	});

	it("should have logo and user's name", () => {
		const userNameElement = screen.getByText(USER_NAME);
		expect(userNameElement).toBeInTheDocument();
	});
});
