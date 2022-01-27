import "./Input.css";

export default function Input({ handleChange, value, styleObj }) {
  return (
    <input
      type="text"
      onChange={(e) => {
        handleChange(e.target.value);
      }}
      value={value}
      className="input-task"
    />
  );
}
