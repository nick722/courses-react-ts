import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../services';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getBearerToken } from '../../helpers/getBearerToken';

const bearerToken = getBearerToken();

export const getUser = createAsyncThunk('user/getUser', async () => {
	const url = `${BASE_URL}/users/me`;
	const config = { headers: { Authorization: bearerToken } };

	try {
		const response = await axios.get(url, config);
		const result = response.data.result;
		console.log('result', result);
		return result;
	} catch (error) {
		return `Handled Error: ${error}`;
	}
});

export const login = createAsyncThunk(
	'user/login',
	async (event: React.ChangeEvent<HTMLFormElement>, { rejectWithValue }) => {
		const loginUrl = `${BASE_URL}/login`;

		const userCreds = {
			// email: 'f@g.com',
			// password: '123456',
			email: event.target.email?.value,
			password: event.target.password?.value,
		};

		try {
			const response = await axios.post(loginUrl, userCreds);
			const token = response.data.result;
			localStorage.setItem('token', token);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const logout = createAsyncThunk(
	'user/logout',
	async (bearerToken: string, { rejectWithValue }) => {
		const logoutUrl = `${BASE_URL}/logout`;
		const config = {
			headers: {
				Authorization: bearerToken,
			},
		};

		try {
			const response = await axios.delete(logoutUrl, config);
			return response.data;
		} catch (error) {
			toast.error(error);
			return rejectWithValue(error.message);
		}
	}
);
