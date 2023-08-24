import Header from './Header';
import { getByAltText, screen } from '@testing-library/react';
import { renderWithState } from '../test-utils/renderWithState';
import React from 'react';

describe('Header', () => {
	let component;

	beforeEach(() => {
		renderWithState(<Header />);

		screen.debug();
	});

	it('should have logo', () => {
		const logo = screen.getByAltText('logo');

		expect(logo).toBeInTheDocument();
	});
});
