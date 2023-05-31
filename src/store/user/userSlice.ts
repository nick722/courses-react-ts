import { createSlice } from '@reduxjs/toolkit';

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

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
});

const { actions, reducer } = userSlice;
export default reducer;
