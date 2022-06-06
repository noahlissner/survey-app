import axios from 'axios';
const API_URL = '/api/surveys/';

const newSurvey = async (surveyData: any) => {
	const config = {
		headers: {
			authorization: `Bearer`,
		},
	};

	const response = await axios.post(API_URL + 'new', surveyData, config);
	return response.data;
};

const fetchSurveys = async (_id: string, token: string) => {
	const config = {
		headers: {
			authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(API_URL + 'fetch', config);
	return response.data;
};

const surveyService = {
	newSurvey,
	fetchSurveys,
};

export default surveyService;
