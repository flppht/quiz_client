import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import CreateQuiz from "./components/CreateQuiz";
import "./App.css";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createquiz" element={<CreateQuiz />} />
          <Route path="/quiz/:id" element={<Quiz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
