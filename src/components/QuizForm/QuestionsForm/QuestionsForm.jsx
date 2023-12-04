import AnswersForm from "./AnswersForm/AnswersForm";

import classes from "./QuestionsForm.module.css";

function QuestionsForm(props) {
  const {
    questions,
    onChange,
    onAdd,
    onRemove,
    onAddQuesionAnswer,
    onRemoveQuesionAnswer,
    onChangeQuestionAnswer,
  } = props;

  return (
    <section className={classes["questions"]}>
      <h2 className={classes["questions__header"]}>Questions</h2>
      <ul className={classes["questions__list"]}>
        {questions.map((question, index) => (
          <li key={index} className={classes["questions__list-item"]}>
            <button
              type="button"
              onClick={onRemove.bind(null, index)}
              className={classes["questions__delete-btn"]}
            >
              Delete
            </button>
            <div className="form-control">
              <label htmlFor={`text_${index}`} aria-required={true}>
                Text
              </label>
              <input
                id={`text_${index}`}
                name="text"
                value={question.text}
                onChange={onChange.bind(null, index)}
                type="text"
                placeholder="Question Text"
              />
            </div>
            <div className="form-control">
              <label htmlFor={`feedback_true_${index}`} aria-required={true}>
                Feedback True
              </label>
              <input
                id={`feedback_true_${index}`}
                name="feedback_true"
                value={question.feedback_true}
                onChange={onChange.bind(null, index)}
                type="text"
                placeholder="Question Feedback True"
              />
            </div>
            <div className="form-control">
              <label htmlFor={`feedback_false_${index}`} aria-required={true}>
                Feedback False
              </label>
              <input
                id={`feedback_false_${index}`}
                name="feedback_false"
                value={question.feedback_false}
                onChange={onChange.bind(null, index)}
                type="text"
                placeholder="Question Feedback False"
              />
            </div>
            <AnswersForm
              answers={question.answers}
              quesIndex={index}
              onAdd={onAddQuesionAnswer}
              onRemove={onRemoveQuesionAnswer}
              onChange={onChangeQuestionAnswer}
            />
          </li>
        ))}
        <button
          className={classes["questions__add-btn"]}
          type="button"
          onClick={onAdd}
        >
          Add Question
        </button>
      </ul>
    </section>
  );
}

export default QuestionsForm;
