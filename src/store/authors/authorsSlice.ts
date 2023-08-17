import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAuthorsAll, postAuthorsAdd } from './thunks';
import { AuthorsState, AuthorsType } from './types';
import { RootState } from '../index';

const initialState: AuthorsState = {
	data: null,
	loading: false,
	error: null,
};

const authorsSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {
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
		builder.addCase(postAuthorsAdd.pending, (state) => ({
			...state,
			error: null,
			loading: true,
		}));
		builder.addCase(postAuthorsAdd.fulfilled, (state, action) => {
			console.log('postAuthorsAdd.fulfilled action.payload', action.payload);

			return {
				...state,
				error: null,
				loading: false,
				data: [...state.data, action.payload],
			};
		});
		builder.addCase(postAuthorsAdd.rejected, (state, action) => {
			console.log(
				'postAuthorsAdd.rejected action.payload',
				postAuthorsAdd.rejected
			);

			return {
				...state,
				error: 'action.payload',
				loading: false,
				data: state.data,
			};
		});
	},
});

const { reducer } = authorsSlice;
export default reducer;
