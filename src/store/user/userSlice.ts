import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../../services';
import axios from 'axios';
import { types } from 'sass';
import Error = types.Error;
import { toast } from 'react-toastify';

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
			return rejectWithValue(error.message);
		}
	}
);

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getUser.fulfilled, (state, action) => {
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
		builder.addCase(logout.fulfilled, (state, action) => {
			return {
				error: null,
				loading: false,
				data: {
					isAuth: false,
					name: '',
					email: '',
					token: '',
				},
			};
		});
		builder.addCase(logout.rejected, (state, action) => {
			toast('logout.rejected!!');

			return {
				error: action.payload,
				loading: false,
				data: {
					isAuth: !!bearerToken,
					name: state.data.name,
					email: state.data.email,
					token: state.data.token,
				},
			};
		});
	},
});

const { actions, reducer } = userSlice;
// export const { logout } = actions;
export default reducer;

// SELECTORS
export const selectIsAuth = (state) => !!state.user.data.token;
export const selectBearerToken = (state) => state.user.data.token;
export const selectLoginError = (state) => state.user.error;
export const selectUserName = (state) => state.user.data.name;
