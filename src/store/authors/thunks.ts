import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../services';
import axios from 'axios';

export const getAuthorsAll = createAsyncThunk(
	'authors/getAuthorsAll',
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
