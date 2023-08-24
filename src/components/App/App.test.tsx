import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../../store/rootReducer';
import { MemoryRouter } from 'react-router-dom';

const store = configureStore({ reducer: rootReducer });
const Wrapper = ({ children }) => (
	<Provider store={store}>
		<MemoryRouter>{children} </MemoryRouter>
	</Provider>
);

describe('App', () => {
	it('has h1 Header with the text "Login"', async () => {
		render(<App />, { wrapper: Wrapper });

		const header = screen.getByRole('heading', { level: 1 });

		// screen.debug(header);
		screen.debug();
		expect(header).toHaveTextContent('Login');
	});
});
