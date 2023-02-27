import React from "react";
import {v4 as uuid} from "uuid";

function QuestionList({questions}) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(q=>

            <li key={uuid()}>{q.prompt}</li>
        )}
      </ul>
    </section>
  );
}

export default QuestionList;
