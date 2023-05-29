// noinspection TypeScriptValidateTypes

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthorsType } from './types';
import axios from 'axios';
import { BASE_URL } from '../../services';
import { mockedAuthorsList } from '../../constants/mockedAuthorsList.js';

export const fetchAuthors = createAsyncThunk(
	'authors/fetchAuthors',
	async () => {
		const url = `${BASE_URL}/authors/all`;

		try {
			const response = await axios.get(url);
			const authors = response.data.result;
			return authors;
		} catch (error) {
			return error;
		}
	}
);

const authorsSlice = createSlice({
	name: 'authors',
	initialState: [...mockedAuthorsList] as AuthorsType[],
	reducers: {
		save: (state, action) => {
			const { payload } = action;
			// state.authors = [...state.authors, payload];
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAuthors.fulfilled, (state, action) => action.payload);
	},
});

const { actions, reducer } = authorsSlice;
export const { saveAuthors } = actions;
export default reducer;
