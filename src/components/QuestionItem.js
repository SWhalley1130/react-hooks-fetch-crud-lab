import React from "react";

function QuestionItem({ question, questionDeleted }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleChange(e)
  {
    console.log(e.target.value)
  }

  function handleDelete()
  {
    fetch(`http://localhost:4000/questions/${question.id}`,
    {
      method:'DELETE',
      headers:
      {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body:JSON.stringify(question)
    })
    .then(questionDeleted(question))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
