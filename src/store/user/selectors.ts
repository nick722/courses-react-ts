export const selectIsAuth = (state) => !!state.user.data.token;
export const selectBearerToken = (state) => state.user.data.token;
export const selectLoginError = (state) => state.user.error;
export const selectUserName = (state) => state.user.data.name;
