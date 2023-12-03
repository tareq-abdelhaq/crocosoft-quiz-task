import classes from "./DateViewer.module.css";

function DateViewer(props) {
  const { date: dateStr } = props;

  if (!dateStr) {
    return "---";
  }

  const dateObj = new Date(dateStr);
  const date = dateObj
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .replace(", ", ",\n");

  return <p className={classes["date-viewer"]}>{date}</p>;
}

export default DateViewer;
