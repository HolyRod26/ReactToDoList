import Form from "../Form";
import List from "../List";
import "./Container.css";
import React, { useState, useEffect } from "react";
//
function FormContainer() {
  const [list, setList] = useState([]);

  function Task(title = "", completed = false) {
    this.id = Math.random().toString(36).substr(2, 18);
    this.title = title;
    this.completed = completed;
  }

  const InitialItems = [
    new Task("TaskInicial1"),
    new Task("TaskInicial2"),
    //new Task("tarea 3"),
    //new Task("tarea 4"),
    //new Task("tarea 5"),
  ];

  useEffect(() => {
    setList(InitialItems);
    console.log(InitialItems);
  }, [InitialItems]);

  /*useEffect(() => {
    const miStorage = window.localStorage;
  }, [list]);*/

  const _deleteTask = (itemToDelete) => {
    setList(list.filter((item) => item.id !== itemToDelete.id));
  };
  // To change the state of the inputValue state to add it to the list

  const handleAddingItem = (toDoNew) => {
    list.some((item) => item.title === toDoNew.title)
      ? alert("Ingresa una tarea unica")
      : setList([...list, toDoNew]);
    console.log(list);
  };

  const handleDelete = (itemToDelete) => {
    const result = window.confirm(
      "Are you sure you want to delete this task?..."
    );
    // if (result) return _deleteTask(itemToDelete);
    return result && _deleteTask(itemToDelete);
  };

  return (
    <div className="container">
      <Form value={list} handleAddingItem={handleAddingItem} />
      <List
        list={list}
        setList={setList}
        handleDelete={handleDelete}
        Task={Task}
      />
    </div>
  );
}

export default FormContainer;

/**
 * const [inputValue, setInputValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setInputValue("");
  };
 * 

 */
