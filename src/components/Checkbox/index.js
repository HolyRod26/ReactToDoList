import "./index.css";

export default function Checkbox({ onClick, value }) {
  const handleCheckboxAction = (e) => {
    onClick();
  };

  return (
    <input
      type="checkbox"
      onChange={handleCheckboxAction}
      value={value}
      className="checkbox-task"
    />
  );
}
