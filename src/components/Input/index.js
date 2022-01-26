export default function Input({ handleChange, value }) {
  return (
    <input
      type="text"
      onChange={(e) => {
        handleChange(e.target.value);
      }}
      value={value}
    />
  );
}
