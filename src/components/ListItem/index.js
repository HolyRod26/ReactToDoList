import Button from "../Button";
import "./ListItem.css";

export default function ListItem({ content, onClick }) {
  return (
    <div className="list-item">
      <p>{content.title}</p>

      <Button label="X" onClick={onClick} />
    </div>
  );
}
