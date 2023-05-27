import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { coursesReducer } from './courses/reducer';

const rootReducer = combineReducers({
	courses: coursesReducer,
});

export const store = configureStore({ reducer: rootReducer });
