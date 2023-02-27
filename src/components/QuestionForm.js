import React, { useState } from "react";

function QuestionForm({newQuestionAdded}) {
  const [formData, setFormData] = useState({
    prompt: "",
    answers:
    [
      "",
      "",
      "",
      ""
    ],
    correctIndex: 0,
  });

  console.log(formData)

  function handleChange(event) {
    // console.log(event.target.name)
    // console.log(event.target.value)

    if (event.target.name.includes('answer'))
    {
      const arrayIndex=parseInt(event.target.name.substr(8))
      console.log(formData.answers)
      console.log(formData.answers[0].value)
      // setFormData({
      //   ...formData, 
      //   [formData.answers[arrayIndex]]: event.target.value
      // })
    }
    else 
    {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
  }
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:4000/questions`,
    {
      method:'POST',
      headers:
      {
        "Content-Type":"application/json",
        "Accepts":"application/json"
      },
      body:JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then(newQ=>console.log(newQ))
  }

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input
            type="text"
            name="prompt"
            value={formData.prompt}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 1:
          <input
            type="text"
            name="answers[0]"
            value={formData.answers[0]}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 2:
          <input
            type="text"
            name="answers[1]"
            value={formData.answers[1]}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 3:
          <input
            type="text"
            name="answers[2]"
            value={formData.answers[2]}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 4:
          <input
            type="text"
            name="answers[3]"
            value={formData.answers[3]}
            onChange={handleChange}
          />
        </label>
        <label>
          Correct Answer:
          <select
            name="correctIndex"
            value={formData.correctIndex}
            onChange={handleChange}
          >
            <option value="0">{formData.answers[0]}</option>
            <option value="1">{formData.answers[1]}</option>
            <option value="2">{formData.answers[2]}</option>
            <option value="3">{formData.answers[3]}</option>
          </select>
        </label>
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;
