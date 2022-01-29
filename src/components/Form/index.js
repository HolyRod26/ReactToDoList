import Input from "../Input";
import Button from "../Button";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

//Form cambiado

import React, { useState } from "react";

export default function Form({ label, handleAddingItem, Task }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (taskToSave) => {
    setInputValue(taskToSave);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Taskcreated = Task(inputValue);
    inputValue
      ? handleAddingItem(Taskcreated)
      : alert("No has ingresado una tarea");
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>{label}</label>
      <Input handleInputChange={handleInputChange} value={inputValue} />
      <Button
        isSubmit={true}
        label={"Add Task to List"}
        onClick={handleSubmit}
      />
    </form>
  );
}
