// src/components/AdminNavBar.js
import React from "react";

function AdminNavBar({ onViewQuestions, onNewQuestion }) {
  return (
    <nav>
      <button onClick={onViewQuestions}>View Questions</button>
      <button onClick={onNewQuestion}>New Question</button>
    </nav>
  );
}

export default AdminNavBar;
