import axios from 'axios';

const API_URL = '/api/users/';

// Register
const register = async (userData: any) => {
	const response = await axios.post(API_URL + 'register', userData);

	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data));
	}

	return response.data;
};

// Login
const login = async (userData: any) => {
	const response = await axios.post(API_URL + 'login', userData);

	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data));
	}

	return response.data;
};

const logout = () => {
	localStorage.removeItem('user');
};

const edit = async (userData: any, token: string) => {
	const config = {
		headers: {
			authorization: `Bearer ${token}`,
		},
	};
	const response = await axios.put(API_URL + 'edit', userData, config);
	return response.data;
};

const editPassword = async (data: any, token: string) => {
	const config = {
		headers: {
			authorization: `Bearer ${token}`,
		},
	};
	const response = await axios.put(API_URL + 'editpassword', data, config);
	return response.data;
};

const authService = {
	register,
	login,
	logout,
	edit,
	editPassword,
};

export default authService;
