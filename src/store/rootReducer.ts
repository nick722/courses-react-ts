import { combineReducers } from '@reduxjs/toolkit';
import { coursesReducer } from './courses/reducer';
// import { authorsReducer } from './authors/reducer';
import authorsReducer from './authors/authorsSlice';
import userReducer from './user/userSlice';

const rootReducer = combineReducers({
	courses: coursesReducer,
	authors: authorsReducer,
	user: userReducer,
});

export default rootReducer;
