import axios from 'axios';
const API_URL = '/api/surveys/';

export const newSurvey = async (surveyData: any) => {
	const config = {
		headers: {
			authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWQxMTA5OWQ4ZjNjZmNkZWYyZDZkMSIsImlhdCI6MTY1NDQ2MDY4MSwiZXhwIjoxNjU3MDUyNjgxfQ.NYcrwB-dUOQPNYc2XzosHD4VWyaR0tApz1ekd8Z0-BM`,
		},
	};

	const response = await axios.post(API_URL + 'new', surveyData, config);
	return response.data;
};
