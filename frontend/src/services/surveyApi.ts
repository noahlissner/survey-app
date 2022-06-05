import axios from 'axios';
const API_URL = '/api/surveys/';

export const newSurvey = async (surveyData: any) => {
	const config = {
		headers: {
			authorization: `Bearer`,
		},
	};

	const response = await axios.post(API_URL + 'new', surveyData, config);
	return response.data;
};
