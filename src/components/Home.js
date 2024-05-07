import React, { useState } from "react";
import CreateQuiz from "./CreateQuiz";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="welcomeContainer flex flex-col items-center mt-20">
      {!isVisible && (
        <>
          <p className="font-semibold">Welcome to the Quiz App</p>
          <p className="mt-2">To create a quiz press the button</p>
          <button
            onClick={() => setIsVisible(true)}
            type="button"
            className="rounded bg-slate-500 mt-5 py-1 px-2 text-white w-24"
          >
            Create
          </button>
        </>
      )}
      {isVisible && <CreateQuiz />}
    </div>
  );
};

export default Home;
