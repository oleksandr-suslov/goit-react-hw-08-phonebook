const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUserName = (state) => state.auth.user.name;

const getToken = (state) => state.auth.token;

const getAuthError = (state) => state.auth.error;

const getCurrentUser = (state) => state.auth.isUser;

export { getIsLoggedIn, getUserName, getToken, getAuthError, getCurrentUser };
