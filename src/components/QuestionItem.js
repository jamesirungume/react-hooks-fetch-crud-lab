function QuestionItem({ question, onDelete, onCorrectIndexChange }) {
  return (
    <li>
      {question.prompt}
      <button onClick={onDelete}>Delete</button>
      <select
        
        onChange={(e) => onCorrectIndexChange(e.target.value)}
      >
        {question.answers.map((answer, index) => (
          <option key={index} value={index}>
            {answer}
          </option>
        ))}
      </select>
    </li>
  );
}

export default QuestionItem;