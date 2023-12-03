import { Link } from "react-router-dom";

import { getAllQuizes } from "../../libs/quiz";

import DateViewer from "../UI/DateViewer";

import classes from "./QuizesTable.module.css";

function QuizesTable() {
  const quizes = getAllQuizes();
  let tableContent;

  if (quizes.length === 0) {
    tableContent = (
      <tr className={classes["quizes-table__empty"]}>
        <td colSpan="100%">No Data</td>
      </tr>
    );
  } else {
    tableContent = quizes.map((quiz) => {
      const {
        id,
        title,
        description,
        created: createdAt,
        modified: updatedAt,
      } = quiz;

      return (
        <tr key={id}>
          <td>#{id}</td>
          <td>{title}</td>
          <td>{description}</td>
          <td>
            <DateViewer date={createdAt} />
          </td>
          <td>
            <DateViewer date={updatedAt} />
          </td>
          <td>
            <Link to={`quiz/${id}/edit`}>
              <button className={classes["quizes-table__edit-btn"]}>
                Edit
              </button>
            </Link>
          </td>
        </tr>
      );
    });
  }

  return (
    <table className={classes["quizes-table"]}>
      <thead>
        <tr>
          <th>ID</th>
          <th className={classes["quizes-table__title-col"]}>Title</th>
          <th className={classes["quizes-table__desc-col"]}>Description</th>
          <th>Created_At</th>
          <th>Updated_At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{tableContent}</tbody>
    </table>
  );
}

export default QuizesTable;
