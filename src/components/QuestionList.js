import React from "react";
import {v4 as uuid} from "uuid";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, questionDeleted, updatedCorrectAnswer}) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(q=>

          <QuestionItem 
            updatedCorrectAnswer={updatedCorrectAnswer}
            questionDeleted={questionDeleted} 
            key={uuid()} 
            question={q} />
        )}
      </ul>
    </section>
  );
}

export default QuestionList;
