import Form from "../../components/Form";

// import "./index.css";

export default function FormContainer({ list, Task, handleAddingItem }) {
  return (
    <div className="container">
      <Form list={list} handleAddingItem={handleAddingItem} Task={Task} />
    </div>
  );
}
