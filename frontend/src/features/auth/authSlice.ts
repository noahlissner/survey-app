import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

// Get user from localStorage
const userJSON = localStorage.getItem('user');
const user = userJSON && JSON.parse(userJSON);

const initialState = {
	user: user ? user : null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

// Type for userData in register
type registerData = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};

export const register = createAsyncThunk(
	'auth/register',
	async (user: registerData, thunkAPI) => {
		try {
			return await authService.register(user);
		} catch (error: any) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Type for userData in register
type loginData = {
	email: string;
	password: string;
};

// Login user
export const login = createAsyncThunk(
	'auth/login',
	async (user: loginData, thunkAPI) => {
		try {
			return await authService.login(user);
		} catch (error: any) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const logout = createAsyncThunk('auth/logout', async () => {
	await authService.logout();
});

type editData = {
	firstName: string;
	lastName: string;
	email: string;
};

export const edit = createAsyncThunk(
	'auth/edit',
	async (user: editData, thunkAPI: any) => {
		try {
			const token = thunkAPI.getState().auth.user.token;

			return await authService.edit(user, token);
		} catch (error: any) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

type passwordData = {
	oldPassword: string;
	newPassword: string;
};

export const editPassword = createAsyncThunk(
	'auth/editPassword',
	async (data: passwordData, thunkAPI: any) => {
		try {
			const token = thunkAPI.getState().auth.user.token;

			return await authService.editPassword(data, token);
		} catch (error: any) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.isSuccess = false;
			state.isError = false;
			state.message = '';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			.addCase(register.rejected, (state: any, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null;
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			.addCase(login.rejected, (state: any, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null;
			})
			.addCase(logout.fulfilled, (state) => {
				state.user = null;
			})
			.addCase(edit.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(edit.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			.addCase(edit.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload as string;
				state.user = null;
			})
			.addCase(editPassword.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(editPassword.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			.addCase(editPassword.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload as string;
			});
	},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
