import React, { useState } from "react";

const App = () => {
  // Step 1: Define a list of questions
  const questions = [
    "Tell me about yourself.",
    "Describe your favorite hobby.",
    "What is your opinion about online education?",
  ];

  // Step 2: State to manage the current question index
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [examStopped, setExamStopped] = useState(false);

  // Step 3: Handle next question
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("You have completed all the questions!");
    }
  };

  // Step 4: Handle stop button
  const handleStop = () => {
    setExamStopped(true);
    setCurrentQuestion(0); // Reset to the first question
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {!examStopped ? (
        <>
          <h2>CEFR Speaking Exam</h2>
          <p><strong>Question:</strong> {questions[currentQuestion]}</p>
          <button
            onClick={handleNextQuestion}
            style={{
              margin: "10px",
              padding: "10px 20px",
              fontSize: "16px",
            }}
          >
            Next Question
          </button>
          <button
            onClick={handleStop}
            style={{
              margin: "10px",
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "red",
              color: "white",
            }}
          >
            Stop Exam
          </button>
        </>
      ) : (
        <h3>The exam has been stopped. Restart to begin again.</h3>
      )}
    </div>
  );
};

export default App;
