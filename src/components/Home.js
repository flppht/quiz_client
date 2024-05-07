import React, { useState } from "react";
import CreateQuiz from "./CreateQuiz";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="welcomeContainer mt-20">
      {!isVisible && (
        <div className="flex flex-col items-center">
          <p className="font-semibold">Welcome to the Quiz App</p>
          <p className="mt-2">To create a quiz press the button</p>
          <button
            onClick={() => setIsVisible(true)}
            type="button"
            className="rounded bg-slate-500 mt-5 py-1 px-2 text-white w-24"
          >
            Create
          </button>
        </div>
      )}
      {isVisible && <CreateQuiz />}
    </div>
  );
};

export default Home;
