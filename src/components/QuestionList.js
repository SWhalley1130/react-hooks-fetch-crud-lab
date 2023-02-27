import React from "react";
import {v4 as uuid} from "uuid";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, questionDeleted}) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(q=>

          <QuestionItem questionDeleted={questionDeleted} key={uuid()} question={q} />
        )}
      </ul>
    </section>
  );
}

export default QuestionList;
