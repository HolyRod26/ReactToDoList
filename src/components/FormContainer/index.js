import Form from "../Form";
import List from "../List";
import "./index.css";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
//
export default function FormContainer() {
  const [list, setList] = useState([]);

  const Task = (title = "No title...", completed = false) => {
    return { title: title, completed, id: uuidv4() };
  };

  const handleInitialItems = [
    Task("TaskInicial1"),
    Task("TaskInicial2"),
    Task("tarea 3"),
  ];

  /*useEffect(() => {
    setList(handleInitialItems);
  }, [handleInitialItems]);
*/

  useEffect(() => {
    setList([]);
  }, []);

  const deleteTask = (itemToDelete) => {
    setList(list.filter((item) => item.id !== itemToDelete.id));
  };

  const handleAddingItem = (toDoNew) => {
    list.some((item) => item.title === toDoNew.title)
      ? alert("Ingresa una tarea unica")
      : setList([...list, toDoNew]);
    console.log(toDoNew);
  };

  const handleDelete = (itemToDelete) => {
    const result = window.confirm(
      "Are you sure you want to delete this task?..."
    );
    if (!result) return deleteTask(itemToDelete);
  };

  return (
    <div className="container">
      <Form value={list} handleAddingItem={handleAddingItem} Task={Task} />
      <List list={list} handleDelete={handleDelete} Task={Task} />
    </div>
  );
}

/**
 * const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setInputValue("");
  };
 * 

 */
