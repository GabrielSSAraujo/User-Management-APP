const TOKEN = "user_token";

const login = (token) => localStorage.setItem(TOKEN, token);
const logout = () => localStorage.removeItem(TOKEN);
const isAuthenticated = () => !!localStorage.getItem(TOKEN);

export {login, logout, isAuthenticated, TOKEN}