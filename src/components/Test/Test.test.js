import { render, screen } from '@testing-library/react';
import React from 'react';
import Test from './Test';

describe('App', () => {
	it('should render the component', async () => {
		render(<Test />);

		screen.debug();
	});
});
