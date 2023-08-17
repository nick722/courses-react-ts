import { createSlice } from '@reduxjs/toolkit';
import { types } from 'sass';
import Error = types.Error;
import { getUser, login, logout } from './thunks';
import { getBearerToken } from '../../helpers/getBearerToken';

const bearerToken = getBearerToken();

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

const initialState: UserState = {
	data: { isAuth: false, name: '', email: '', token: '' },
	loading: false,
	error: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getUser.fulfilled, (state, action) => {
			console.log('getUser action.payload', action.payload);

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
		builder.addCase(getUser.rejected, (state, action) => {
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
		builder.addCase(login.pending, (state, action) => {
			return {
				...state,
				error: null,
				loading: true,
			};
		});
		builder.addCase(login.fulfilled, (state, action) => {
			console.log('login action.payload', action.payload);

			return {
				error: null,
				loading: false,
				data: {
					isAuth: !!action.payload.result,
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
			// toast('logout.rejected!!');

			return {
				error: 'action.payload',
				loading: false,
				data: state.data,
			};
		});
	},
});

const { actions, reducer } = userSlice;
// export const { logout } = actions;
export default reducer;
