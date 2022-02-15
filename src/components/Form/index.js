import Input from "../Input";
import Button from "../Button";
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
      <label value="Add a new Task:">{label}</label>
      <Input
        handleInputChange={handleInputChange}
        value={inputValue}
        inputType="text"
      />
      <Button
        isSubmit={true}
        label={"Add Task to List"}
        onClick={handleSubmit}
      />
    </form>
  );
}
