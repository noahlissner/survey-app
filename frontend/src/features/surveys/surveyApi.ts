import axios from "axios";
import { IItem } from "../../models/Survey";
const API_URL = "/api/surveys/";

const user = JSON.parse(localStorage.getItem("user") || "");
const token = user.token;

const newSurvey = async (surveyData: any) => {
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
