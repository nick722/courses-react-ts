import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../../store/rootReducer';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import React from 'react';
import { RootState } from '../../store';

export const renderWithState = (
	ui,
	{ initialState, ...renderOptions } = { initialState: {} }
) => {
	const store = configureStore({
		reducer: rootReducer,
		preloadedState: initialState,
	});
	const Wrapper = ({ children }) => (
		<Provider store={store}>{children}</Provider>
	);

	return render(ui, { wrapper: Wrapper, ...renderOptions });
};
