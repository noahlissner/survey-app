import axios from 'axios';

export const surveyAccess = async (slug: any) => {
	const config = {};
	const response = await axios.post('/api/surveys/access', slug);
	return response.data;
};
