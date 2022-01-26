import Input from "../Input";
import Button from "../Button";

export default function Form({ label, onSubmit, value, handleChange }) {
  return (
    <form onSubmit={onSubmit}>
      <label>{label}</label>
      <Input handleChange={handleChange} />
      <Button typeButton={1} />
    </form>
  );
}
