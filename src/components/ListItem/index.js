import Button from "../Button";
import PropTypes from "prop-types";
import "./index.css";

export default function ListItem({ title, onClick }) {
  return (
    <div className="list-item">
      <p>{title}</p>

      <Button label="X" onClick={onClick} />
    </div>
  );
}

ListItem.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};
