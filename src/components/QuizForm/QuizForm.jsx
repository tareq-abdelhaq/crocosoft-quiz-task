import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  createQuiz,
  generateId,
  generateQuizDate,
  editQuiz,
} from "../../libs/quiz";

import QuestionsForm from "./QuestionsForm/QuestionsForm";

import classes from "./QuizForm.module.css";

function QuizForm(props) {
  const { initData } = props;

  const [quiz, setQuiz] = useState({ title: "", description: "", url: "" });
  const [questions, setQuestions] = useState([]);

  const navigate = useNavigate();

  function quizDataChangedHandler(e) {
    setQuiz((prevQuiz) => ({ ...prevQuiz, [e.target.name]: e.target.value }));
  }

  function questionChangedHandler(index, e) {
    setQuestions((prevQuestions) =>
      prevQuestions.map((prevQuesion, idx) => {
        if (index === idx) {
          return {
            ...prevQuesion,
            [e.target.name]: e.target.value,
          };
        }
        return prevQuesion;
      })
    );
  }

  function addQuestionHandler() {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      { text: "", feedback_false: "", feedback_true: "", answers: [] },
    ]);
  }

  function removeQuestionHandler(index) {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((_, idx) => index !== idx)
    );
  }

  function questionAnswerChangedHandler(quesIndex, ansIndex, e) {
    const isRadioInput = e.target.type === "radio";

    setQuestions((prevQuesions) =>
      prevQuesions.map((prevQuestion, index) => {
        if (quesIndex === index) {
          return {
            ...prevQuestion,
            answers: prevQuestion.answers.map((answer, idx) => {
              if (ansIndex === idx) {
                return {
                  ...answer,
                  [isRadioInput ? "is_true" : e.target.name]: isRadioInput
                    ? true
                    : e.target.value,
                };
              }

              return isRadioInput ? { ...answer, is_true: false } : answer;
            }),
          };
        }
        return prevQuestion;
      })
    );
  }

  function addQuestionAnswerHandler(quesionIndex) {
    setQuestions((prevQuestions) =>
      prevQuestions.map((prevQuestion, index) => {
        if (quesionIndex === index) {
          return {
            ...prevQuestion,
            answers: [...prevQuestion.answers, { text: "", is_true: false }],
          };
        }

        return prevQuestion;
      })
    );
  }

  function removeQuestionAnswerHandler(quesIndex, ansIndex) {
    setQuestions((prevQuestions) =>
      prevQuestions.map((prevQuestion, index) => {
        if (quesIndex === index) {
          return {
            ...prevQuestion,
            answers: prevQuestion.answers.filter((_, idx) => ansIndex !== idx),
          };
        }
        return prevQuestion;
      })
    );
  }

  function quizSubmitHandler(e) {
    e.preventDefault();
    // validate form
    if (!initData) {
      const quizData = {
        ...quiz,
        created: generateQuizDate(),
        id: generateId(),
        questions_answers: questions.map((question) => ({
          ...question,
          id: generateId(),
          answers: question.answers.map((answer) => ({
            ...answer,
            id: generateId(),
          })),
        })),
      };
      createQuiz(quizData);
    } else {
      const quizData = {
        ...quiz,
        modified: generateQuizDate(),
        questions_answers: questions,
      };
      editQuiz(quizData);
    }
    navigate("/");
  }

  useEffect(() => {
    if (initData) {
      setQuiz({
        id: initData.id,
        title: initData.title,
        description: initData.description,
        url: initData.url,
      });
      setQuestions(initData.questions_answers);
    }
  }, [initData]);

  return (
    <form className={classes["quiz-form"]} onSubmit={quizSubmitHandler}>
      <div className="form-control">
        <label htmlFor="title" aria-required={true}>
          Title
        </label>
        <input
          id="title"
          name="title"
          value={quiz.title}
          onChange={quizDataChangedHandler}
          type="text"
          placeholder="Quiz Title"
        />
      </div>

      <div className="form-control">
        <label htmlFor="description" aria-required={true}>
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={quiz.description}
          onChange={quizDataChangedHandler}
          placeholder="Quiz description"
          rows={4}
        />
      </div>

      <div className="form-control">
        <label htmlFor="url" aria-required={true}>
          URL
        </label>
        <input
          id="url"
          name="url"
          value={quiz.url}
          onChange={quizDataChangedHandler}
          type="text"
          placeholder="Quiz Youtube Video URL"
        />
      </div>
      <QuestionsForm
        questions={questions}
        onChange={questionChangedHandler}
        onAdd={addQuestionHandler}
        onRemove={removeQuestionHandler}
        onAddQuesionAnswer={addQuestionAnswerHandler}
        onRemoveQuesionAnswer={removeQuestionAnswerHandler}
        onChangeQuestionAnswer={questionAnswerChangedHandler}
      />

      <button type="submit" className={classes["quiz-form__submit-btn"]}>
        Submit
      </button>
    </form>
  );
}

export default QuizForm;
