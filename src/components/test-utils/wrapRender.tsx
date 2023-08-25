import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../../store/rootReducer';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import React from 'react';
import { RootState } from '../../store';
import { MemoryRouter } from 'react-router-dom';

export const wrapRender = (
	ui,
	{ initialState, ...renderOptions } = { initialState: {} }
) => {
	const store = configureStore({
		reducer: rootReducer,
		preloadedState: initialState,
	});
	const Wrapper = ({ children }) => (
		<Provider store={store}>
			<MemoryRouter>{children}</MemoryRouter>
		</Provider>
	);

	return render(ui, { wrapper: Wrapper, ...renderOptions });
};
