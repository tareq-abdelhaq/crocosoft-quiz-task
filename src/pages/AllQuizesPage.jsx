import Layout from "../components/Layout/Layout";
import QuizesControls from "../components/QuizesControls/QuizesControls";
import QuizesTable from "../components/QuizesTable/QuizesTable";

function AllQuizesPage() {
  return (
    <Layout>
      <QuizesControls />
      <QuizesTable />
    </Layout>
  );
}

export default AllQuizesPage;
