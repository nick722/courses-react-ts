export const selectIsAuth = (state) => !!state.user.data.isAuth;
export const selectBearerToken = (state) => state.user.data.token;
export const selectUserError = (state) => state.user.error;
export const selectUserName = (state) => state.user.data.name;
export const selectUserEmail = (state) => state.user.data.email;
