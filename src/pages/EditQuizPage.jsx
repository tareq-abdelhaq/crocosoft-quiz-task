import { useParams } from "react-router-dom";

import { getQuiz } from "../libs/quiz";

import Layout from "../components/Layout/Layout";
import QuizForm from "../components/QuizForm/QuizForm";

function EditQuizPage() {
  const { quizId } = useParams();
  const quiz = getQuiz(Number(quizId));

  if (!quiz) {
    return <p className="center">Quiz Not Found</p>;
  }

  return (
    <Layout>
      <h1 className="center">Edit Quiz #{quizId}</h1>
      <QuizForm initData={quiz} />
    </Layout>
  );
}

export default EditQuizPage;
