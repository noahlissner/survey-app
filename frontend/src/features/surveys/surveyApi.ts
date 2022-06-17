import axios from "axios";
import { IItem } from "../../models/Survey";
const API_URL = "/api/surveys/";

const newSurvey = async (surveyData: any, token: string) => {
  // console.log(surveyData);
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL + "new", surveyData, config);
  return response.data;
};

const fetchSurveys = async (_id: string, token: string) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get<IItem>(API_URL + "fetch", config);
  return response.data;
};

const surveyService = {
  newSurvey,
  fetchSurveys,
};

export default surveyService;
