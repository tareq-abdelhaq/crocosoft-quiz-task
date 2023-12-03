import { Routes, Route, Navigate } from "react-router-dom";

import AllQuizesPage from "./pages/AllQuizesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllQuizesPage />} />

      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
}

export default App;
