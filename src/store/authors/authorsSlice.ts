// noinspection TypeScriptValidateTypes

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthorsType } from './types';
import axios from 'axios';
import { BASE_URL } from '../../services';
import { mockedAuthorsList } from '../../constants/mockedAuthorsList.js';

const fetchAuthors = createAsyncThunk('authors/fetchAuthors', async () => {
	const url = `${BASE_URL}/authors/all`;

	try {
		const response = await axios.get(url);
		const authors = response.data.result;
		return authors;
		// dispatch(saveAuthorsAction(authors));

		// dispatch(saveAuthors(getState(), authors));
		// dispatch(saveAuthors(authors));
	} catch (error) {
		console.log(error);
		return error;
	}
});

const authorsSlice = createSlice({
	name: 'authors',
	initialState: [...mockedAuthorsList] as AuthorsType[],
	reducers: {
		save: (state, action) => {
			console.log('state ins slice', state);
			const { payload } = action;
			state.authors = [...state.authors, payload];
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAuthors.fulfilled, (state, action) => {
			console.log('state in fetchAuthors', state);
			// state = [...state, action.payload];
			state = [...state, action.payload];
		});
	},
});

const { actions, reducer } = authorsSlice;
export const { saveAuthors } = actions;
export default reducer;
