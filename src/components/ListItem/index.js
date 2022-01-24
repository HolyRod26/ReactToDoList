import Button from "../Button";

export default function ListItem({ content, onClick }) {
  return (
    <>
      <li>{content}</li> <Button label="X" onClick={onClick} />
    </>
  );
}
