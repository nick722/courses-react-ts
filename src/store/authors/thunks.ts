import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../services';
import axios from 'axios';
import { getAdminAuthorizationConfig } from '../../helpers/adminAuthorizationConfig';
import { Author } from '../../types';

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

export const postAuthorsAdd = createAsyncThunk(
	'authors/postAuthorsAdd',
	async (author: Author) => {
		const authorsAppUrl = `${BASE_URL}/authors/add`;

		try {
			const response = await axios.post(
				authorsAppUrl,
				author,
				getAdminAuthorizationConfig()
			);

			return response.data.result;
		} catch (error) {
			return error;
		}
	}
);
