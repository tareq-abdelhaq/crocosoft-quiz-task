import { Link } from "react-router-dom";
import classes from "./QuizesControls.module.css";

function QuizesControls() {
  return (
    <div className={classes["quizes-controls"]}>
      <Link to="/create-quiz">
        <button className={classes["quizes-controls__create-btn"]}>
          Create Quiz
        </button>
      </Link>
    </div>
  );
}

export default QuizesControls;
