import React from "react";

const Home = () => {
  return (
    <div>
      <h2>Welcome to Quiz</h2>
      <p>To start a quiz press the button</p>
      <button onClick={() => (window.location.href = "/createquiz")}>
        Start a quiz
      </button>
    </div>
  );
};

export default Home;
