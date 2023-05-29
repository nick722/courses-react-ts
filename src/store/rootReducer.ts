import { combineReducers } from '@reduxjs/toolkit';
import { coursesReducer } from './courses/reducer';
// import { authorsReducer } from './authors/reducer';
import authorsReducer from './authors/authorsSlice';

const rootReducer = combineReducers({
	courses: coursesReducer,
	authors: authorsReducer,
});

export default rootReducer;
