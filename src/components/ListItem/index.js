import Button from "../Button";
import Checkbox from "../Checkbox";
import PropTypes from "prop-types";
import "./index.css";

export default function ListItem({
  title,
  handleDelete,
  handleCompleted,
  done,
}) {
  return (
    <div className="list-item">
      <p>{title}</p>
      <Button label="Delete" onClick={handleDelete} type="submit" />
      <Checkbox onClick={handleCompleted} value={done} />
    </div>
  );
}

ListItem.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};
