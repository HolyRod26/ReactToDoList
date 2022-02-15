import "./index.css";

export default function Input({ handleInputChange, value }) {
  const handleTextAction = (e) => {
    handleInputChange(e.target.value);
  };

  return (
    <input
      type="text"
      onChange={handleTextAction}
      value={value}
      className="input-task"
    />
  );
}
