import { Routes, Route, Navigate } from "react-router-dom";

import AllQuizesPage from "./pages/AllQuizesPage";
import CreateQuizPage from "./pages/CreateQuizPage";
import EditQuizPage from "./pages/EditQuizPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllQuizesPage />} />
      <Route path="/create-quiz" element={<CreateQuizPage />} />
      <Route path="/quiz/:quizId/edit" element={<EditQuizPage />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
}

export default App;
