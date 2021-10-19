const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUserEmail = (state) => state.auth.user.email;

const getToken = (state) => state.auth.token;

const getAuthError = (state) => state.auth.error;

const getCurrentUser = (state) => state.auth.isUser;

export { getIsLoggedIn, getUserEmail, getToken, getAuthError, getCurrentUser };
