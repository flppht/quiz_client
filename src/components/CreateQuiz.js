import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { submitQuiz } from "../store";

const CreateQuiz = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    category: "",
    numberOfQuestions: null,
    title: "",
  };

  const validationSchema = Yup.object().shape({
    category: Yup.string().required("You must input a category"),
    numberOfQuestions: Yup.number()
      .positive()
      .required("You must input a number of questions"),
    title: Yup.string().min(3).required("You must input a quiz title"),
  });

  const onSubmit = (data) => {
    axios
      .post(`http://localhost:8080/quiz/create`, null, {
        params: {
          category: data.category,
          numQ: data.numberOfQuestions,
          title: data.title,
        },
      })
      .then((response) => {
        dispatch(submitQuiz(response.data));
        navigate(`/quiz/${response.data}`);
      });
  };

  return (
    <div className="createQuizContainer">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer w-96 flex-row">
          <label>Enter category for questions:</label>
          <ErrorMessage name="category" component="span" />
          <Field id="category" name="category" />

          <label>Enter number of questions:</label>
          <ErrorMessage name="numberOfQuestions" component="span" />
          <Field id="numberOfQuestions" name="numberOfQuestions" />

          <label>Enter quiz title:</label>
          <ErrorMessage name="title" component="span" />
          <Field id="title" name="title" />

          <button
            type="submit"
            className="bg-slate-500 rounded-md p-2 text-white mt-4"
          >
            Create quiz
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateQuiz;
