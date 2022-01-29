import "./index.css";

export default function Input({ handleInputChange, value }) {
  const handleAction = (e) => {
    handleInputChange(e.target.value);
  };
  return (
    <input
      type="text"
      onChange={handleAction}
      value={value}
      className="input-task"
    />
  );
}
