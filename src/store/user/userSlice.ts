import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../../services';
import axios from 'axios';

interface UserState {
	isAuth: boolean;
	name: string;
	email: string;
	token: string;
}

const bearerToken = localStorage.getItem('token');

const initialState: UserState = {
	isAuth: false,
	name: '',
	email: '',
	token: bearerToken || '',
};

export const getUser = createAsyncThunk('user/getUser', async () => {
	const url = `${BASE_URL}/users/me`;
	const config = { headers: { Authorization: bearerToken } };

	try {
		const response = await axios.get(url, config);
		const result = response.data.result;
		console.log('getUser response', response);
		return result;
	} catch (error) {
		console.log(error);
	}
});

export const login = createAsyncThunk('user/login', async () => {
	const url = `${BASE_URL}/login`;

	const userCreds = {
		email: 'f@g.com', //event.target.email?.value,
		password: '123456', //event.target.password?.value,
	};

	try {
		const response = await axios.post(url, userCreds);
		console.log('response', response);
		// setLoginError(null);
		const token = response.data.result;
		localStorage.setItem('token', token);
		// setIsLoggedIn(!!localStorage.getItem('token'));
		// dispatch(login(response));
		// dispatch(getUser());
		console.log('login response.data', response.data);
		return response.data;
	} catch (error) {
		console.error('Axios error', error);
		// setLoginError(error.message);
	}
});

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		// login: (state, action) => {
		// 	// eslint-disable-next-line no-debugger
		// 	// debugger;
		// 	return action.payload;
		// },
		logout: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder.addCase(getUser.fulfilled, (state, action) => {
			console.log('user action.payload', action.payload);
			return {
				isAuth: !!bearerToken,
				name: action.payload?.name || '',
				email: action.payload?.email || '',
				token: bearerToken,
			};
		});
		builder.addCase(login.fulfilled, (state, action) => {
			console.log('action.payload', action.payload);

			return {
				isAuth: true,
				name: action.payload?.user?.name,
				email: action.payload?.user?.email,
				token: action.payload.result,
			};
		});
	},
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
