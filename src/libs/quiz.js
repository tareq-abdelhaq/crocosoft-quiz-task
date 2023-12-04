export function getAllQuizes() {
  const quizes = localStorage.getItem("quizes");
  const parsedQuizes = JSON.parse(quizes);
  if (Array.isArray(parsedQuizes)) {
    return parsedQuizes;
  }

  return [];
}

export function generateQuizDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const time = date.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return `${year}-${month}-${day} ${time}`;
}

export function generateId() {
  return Number(`${Date.now()}${Math.floor(Math.random() * 1000)}`);
}

export function createQuiz(quiz) {
  const quizes = getAllQuizes();
  quizes.unshift(quiz);
  localStorage.setItem("quizes", JSON.stringify(quizes));
}

export function getQuiz(id) {
  const quizes = getAllQuizes();
  return quizes.find((quiz) => quiz.id === id);
}

export function editQuiz(quiz) {
  const quizes = getAllQuizes();
  const updatedQuizes = quizes.map((currentQuiz) => {
    if (currentQuiz.id === quiz.id) {
      return { ...quiz, created: currentQuiz.created };
    }

    return currentQuiz;
  });
  localStorage.setItem("quizes", JSON.stringify(updatedQuizes));
}
