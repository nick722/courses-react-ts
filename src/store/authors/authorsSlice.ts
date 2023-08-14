import { createSlice } from '@reduxjs/toolkit';
import { AuthorsType } from './types';
import { getAuthorsAll } from './thunks';

interface AuthorsState {
	data: AuthorsType[] | null;
	loading: boolean;
	error: string;
}

const initialState: AuthorsState = {
	data: null,
	loading: false,
	error: '',
};

const authorsSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {
		save: (state, action) => {
			// const { payload } = action;
			// state.authors = [...state.authors, payload];
		},
		addAuthor: (state, action) => ({
			...state,
			data: [...state.data, action.payload],
		}),
	},
	extraReducers: (builder) => {
		builder.addCase(getAuthorsAll.fulfilled, (state, action) => ({
			...state,
			data: action.payload,
		}));
	},
});

const { actions, reducer } = authorsSlice;
export const { addAuthor } = actions;
export default reducer;
