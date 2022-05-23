import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface pageState {
  value: string;
}

const initialState: pageState = { value: "Dashboard" };

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    currentPage(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { currentPage } = pageSlice.actions;
export default pageSlice.reducer;
