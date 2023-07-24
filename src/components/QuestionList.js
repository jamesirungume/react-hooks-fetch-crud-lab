import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onUpdateQuestion }) {
  function handleDelete(id) {
    // Remove the question from the list locally
    const updatedQuestions = questions.filter((question) => question.id !== id);

    // Send the DELETE request to the server
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          onDeleteQuestion(updatedQuestions);
        } else {
          throw new Error("Failed to delete question.");
        }
      })
      .catch((error) => console.error("Error deleting question:", error));
  }

  function handleCorrectIndexChange(id, correctIndex) {
    // Find the question to be updated
    const updatedQuestions = questions.map((question) => {
      if (question.id === id) {
        return { ...question, correctIndex };
      }
     
      return question;
    });
    onUpdateQuestion(updatedQuestions);
  
    // Send the PATCH request to the server
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correctIndex }),
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error updating question:", error));
  }
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDelete={() => handleDelete(question.id)}
            onCorrectIndexChange={(correctIndex) =>
              handleCorrectIndexChange(question.id, correctIndex)
            }
          />
        ))}
      </ul>
    </section>





  );
}

export default QuestionList;
