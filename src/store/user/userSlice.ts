import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../../services';
import axios, { AxiosError } from 'axios';
import { FormEvent } from 'react';
import { AsyncThunkRejectedActionCreator } from '@reduxjs/toolkit/dist/createAsyncThunk';
import { types } from 'sass';
import Error = types.Error;

interface UserData {
	isAuth: boolean;
	name: string;
	email: string;
	token: string;
}

interface UserState {
	data: UserData;
	loading: boolean;
	error: null | Error;
}

const bearerToken = localStorage.getItem('token');

const initialState: UserState = {
	data: { isAuth: false, name: '', email: '', token: '' },
	loading: false,
	error: null,
};

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
	async (event: React.ChangeEvent<HTMLFormElement>) => {
		const url = `${BASE_URL}/login`;

		console.log('event.target', event.target);
		console.log('event.email', event.target.email);

		const userCreds = {
			// email: 'f@g.com',
			// password: '123456',
			email: event.target.email?.value,
			password: event.target.password?.value,
		};

		try {
			const response = await axios.post(url, userCreds);
			console.log('response.data', response.data);
			console.log('response.error', response.error);
			const token = response.data.result;
			localStorage.setItem('token', token);
			return response.data;
		} catch (error) {
			console.error('error.message', error.message);
			return error.message;
		}
	}
);

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder.addCase(getUser.fulfilled, (state, action) => {
			console.log('user action.payload', action.payload);
			return {
				error: null,
				loading: false,
				data: {
					isAuth: !!bearerToken,
					name: action.payload?.name || '',
					email: action.payload?.email || '',
					token: bearerToken,
				},
			};
		});
		builder.addCase(login.fulfilled, (state, action) => {
			return {
				error: null,
				loading: false,
				data: {
					isAuth: !!bearerToken,
					name: action.payload?.user?.name,
					email: action.payload?.user?.email,
					token: action.payload.result,
				},
			};
		});
		builder.addCase(login.rejected, (state, action) => {
			return {
				error: action.payload,
				loading: false,
				data: {
					isAuth: false,
					name: '',
					email: '',
					token: '',
				},
			};
		});
	},
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;

// SELECTORS
export const selectIsAuth = (state) => state.user.data.isAuth;
export const selectLoginError = (state) => state.user.error;
