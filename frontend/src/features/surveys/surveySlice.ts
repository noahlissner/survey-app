import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import surveyService from "./surveyApi";

const initialState = {
  surveys: [],
  surveyLoading: false,
  surveyError: false,
  surveySuccess: false,
  surveyMessage: "",
};

export const fetchSurveys = createAsyncThunk(
  "surveys/fetch",
  async (_, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const _id = thunkAPI.getState().auth.user.id;

      return await surveyService.fetchSurveys(_id, token);
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

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    reset: (state) => {
      state.surveyLoading = false;
      state.surveySuccess = false;
      state.surveyError = false;
      state.surveyMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSurveys.pending, (state) => {
        state.surveyLoading = true;
      })
      .addCase(fetchSurveys.fulfilled, (state, action) => {
        state.surveyLoading = false;
        state.surveySuccess = true;
        state.surveys = action.payload;
      })
      .addCase(fetchSurveys.rejected, (state, action) => {
        state.surveyLoading = false;
        state.surveyError = true;
        state.surveyMessage = action.payload as string;
      });
  },
});

export const { reset } = surveySlice.actions;
export default surveySlice.reducer;
