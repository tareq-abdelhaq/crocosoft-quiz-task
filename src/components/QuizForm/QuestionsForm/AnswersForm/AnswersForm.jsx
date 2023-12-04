import classes from "./AnswersForm.module.css";

function AnswersForm(props) {
  const { answers, quesIndex, onChange, onAdd, onRemove } = props;

  return (
    <section className={classes["answers"]}>
      <h3 className={classes["answers__header"]}>Answers</h3>
      <ul className={classes["answers__list"]}>
        {answers.map((answer, index) => (
          <li key={index} className={classes["answers__list-item"]}>
            <button
              type="button"
              onClick={onRemove.bind(null, quesIndex, index)}
              className={classes["answers__delete-btn"]}
            >
              Delete
            </button>
            <div className="form-control">
              <label
                htmlFor={`question_${quesIndex}_answer_text_${index}`}
                aria-required={true}
              >
                Text
              </label>
              <input
                id={`question_${quesIndex}_answer_text_${index}`}
                name="text"
                value={answer.text}
                onChange={onChange.bind(null, quesIndex, index)}
                type="text"
                placeholder="Answer Text"
              />
            </div>

            <div className="form-control">
              <label
                htmlFor={`question_${quesIndex}_answer_is_true_${index}`}
                aria-required={true}
              >
                Is True ?
              </label>
              <input
                id={`question_${quesIndex}_answer_is_true_${index}`}
                name={`ques_${quesIndex}_answer_is_true`}
                checked={answer.is_true}
                onChange={onChange.bind(null, quesIndex, index)}
                type="radio"
              />
            </div>
          </li>
        ))}

        <button
          type="button"
          onClick={onAdd.bind(null, quesIndex)}
          className={classes["answers__add-btn"]}
        >
          Add Answer
        </button>
      </ul>
    </section>
  );
}

export default AnswersForm;
