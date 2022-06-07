import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import pageReducer from '../features/page/pageSlice';
import surveyReducer from '../features/surveys/surveySlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
	reducer: {
		auth: authReducer,
		survey: surveyReducer,
		page: pageReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

// For dispatch
export type AppDispatch = typeof store.dispatch;

export default store;
