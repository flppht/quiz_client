import { configureStore } from "@reduxjs/toolkit";
import { quizReducer, submitQuiz } from "./slices/QuizSlice";

const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export { submitQuiz };
export { store };
