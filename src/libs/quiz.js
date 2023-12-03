export function getAllQuizes() {
  const quizes = localStorage.getItem("quizes");
  const parsedQuizes = JSON.parse(quizes);
  if (Array.isArray(parsedQuizes)) {
    return parsedQuizes;
  }

  return [];
}
