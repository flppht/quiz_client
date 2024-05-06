import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Quiz = () => {
  const { id } = useParams();
  const [listOfQuestions, setListOfQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([
    { id: null, response: "" },
  ]);
  const [correctAnswers, setCorrectAnswers] = useState(-1);
  const quizId = useSelector((state) => state.quiz.quizId) || id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const questionsForUser = await axios.get(
          `http://localhost:8080/quiz/get/${quizId}`
        );
        setListOfQuestions(questionsForUser.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const onChange = (e, id, index) => {
    let array = [...selectedAnswers];
    array[index] = { id, response: e.target.value };
    setSelectedAnswers(array);
  };

  const onClick = () => {
    axios
      .post(`http://localhost:8080/quiz/submit/${quizId}`, selectedAnswers)
      .then((response) => setCorrectAnswers(response.data));
  };

  return (
    <div className="mt-5 w-96 flex flex-col items-center">
      {console.log(selectedAnswers)}
      {listOfQuestions.map((q, index) => (
        <div className="">
          <form>
            <p className="font-semibold mb-2">
              {index + 1}. {q.questionTitle}
            </p>
            <ul className="list-disc ml-8">
              <li>{q.option1}</li>
              <li>{q.option2}</li>
              <li>{q.option3}</li>
              <li>{q.option4}</li>
            </ul>

            <input
              className="px-2 py-1 rounded shadow-sm mt-2 mb-2 w-40 ml-3"
              id={index}
              onChange={(e) => onChange(e, q.id, index)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                }
              }}
              placeholder="Enter your answer..."
            />
            <br />
          </form>
        </div>
      ))}
      <hr className="w-full border-1/2 border-slate-400 my-3" />
      <button
        onClick={onClick}
        type="button"
        className="rounded bg-slate-500 mt-2 py-1 px-2 text-white w-1/2 "
      >
        Submit answers
      </button>

      {correctAnswers >= 0 && (
        <div className="mt-5 flex flex-col items-center text-center">
          <div className="font-semibold">
            Correct answers: {correctAnswers}/{listOfQuestions.length}
          </div>
          {correctAnswers === listOfQuestions.length && (
            <span>
              Congratulations! You have answered all the questions right!
            </span>
          )}
          {correctAnswers / listOfQuestions.length >= 0.5 &&
            !(correctAnswers === listOfQuestions.length) && (
              <span>You can do it better! Try again.</span>
            )}
          {correctAnswers / listOfQuestions.length < 0.5 && (
            <span>Arghh. You have to study more.</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
