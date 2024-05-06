import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    quizId: 0,
  },
  reducers: {
    submitQuiz(state, action) {
      state.quizId = action.payload;
    },
  },
});

export const { submitQuiz } = quizSlice.actions;
export const quizReducer = quizSlice.reducer;
