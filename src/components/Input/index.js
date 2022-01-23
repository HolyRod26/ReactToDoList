export default function Input({ handleChange }) {
  return (
    <input type="text" onChange={(e) => handleChange(e.target.value)}></input>
  );
}
