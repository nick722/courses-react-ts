import { createSlice } from '@reduxjs/toolkit';
import { getAuthorsAll, postAuthorsAdd } from './thunks';

const initialState = {
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
			console.log('action.payload', action.payload);

			return {
				...state,
				error: null,
				loading: false,
				data: [...state.data, action.payload.data.result],
			};
		});
		builder.addCase(postAuthorsAdd.rejected, (state, action) => ({
			...state,
			error: action.payload,
			loading: false,
		}));
	},
});

const { reducer } = authorsSlice;
export default reducer;
