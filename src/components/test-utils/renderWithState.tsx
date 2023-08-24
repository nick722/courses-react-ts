import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../../store/rootReducer';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import React from 'react';

export const renderWithState = (ui, ...renderOptions) => {
	const store = configureStore({ reducer: rootReducer });
	const Wrapper = ({ children }) => (
		<Provider store={store}>{children}</Provider>
	);

	return render(ui, { wrapper: Wrapper, ...renderOptions });
};
