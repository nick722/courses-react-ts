// noinspection TypeScriptValidateTypes

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthorsType } from './types';
import axios from 'axios';
import { BASE_URL } from '../../services';

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

export const getAuthors = createAsyncThunk('authors/getAuthors', async () => {
	const url = `${BASE_URL}/authors/all`;

	try {
		const response = await axios.get(url);
		const authors = response.data.result;
		return authors;
	} catch (error) {
		return error;
	}
});

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
		builder.addCase(getAuthors.fulfilled, (state, action) => ({
			...state,
			data: action.payload,
		}));
	},
});

const { actions, reducer } = authorsSlice;
export const { addAuthor } = actions;
export default reducer;

//Selectors
export const selectAuthors = (state) => state.authors.data;
