import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [questions, setQuestions] = useState([]);
  const [viewQuestions, setViewQuestions] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
    setViewQuestions(true); // Show the list of questions after adding a new question
  }

  function handleDeleteQuestion(updatedQuestions) {
    setQuestions(updatedQuestions);
  }

  function handleUpdateQuestion(updatedQuestions) {
    setQuestions(updatedQuestions);
  }

  return (
    <div>
      <AdminNavBar
        onViewQuestions={() => setViewQuestions(true)}
        onNewQuestion={() => setViewQuestions(false)}
      />
      {viewQuestions ? (
        <QuestionList
          questions={questions}
          onDeleteQuestion={handleDeleteQuestion}
          onUpdateQuestion={handleUpdateQuestion}
        />
      ) : (
        <QuestionForm onAddQuestion={handleAddQuestion} />
      )}
    </div>
  );
}

export default App;
