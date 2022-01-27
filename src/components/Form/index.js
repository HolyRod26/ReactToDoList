import Input from "../Input";
import Button from "../Button";
import "./Form.css";

import React, { useState, useEffect } from "react";

export default function Form({ label, handleAddingItem }) {
  // Creador de ToDos
  function Task(title = "No title...", completed = false) {
    this.id = Date.now();
    this.title = title;
    this.completed = completed;
  }

  const [inputValue, setInputValue] = useState("");
  const handleChange = (taskToSave) => {
    setInputValue(taskToSave);
    console.log(inputValue);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("prevent default");
    const Taskcreated = new Task(inputValue);
    inputValue
      ? handleAddingItem(Taskcreated)
      : alert("No has ingresado una tarea");
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <label>{label}</label>
      <Input handleChange={handleChange} value={inputValue} />
      <Button typeButton={1} label={"Add Task to List"} onClick={onSubmit} />
    </form>
  );
}
