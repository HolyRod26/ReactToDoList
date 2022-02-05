import Form from "../../components/Form";

// import "./index.css";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function FormContainer() {
  const [list, setList] = useState([]);

  const Task = (title = "No title...", done = false) => {
    return { title: title, done, id: uuidv4() };
  };

  const handleInitialItems = [
    Task("TaskInicial1"),
    Task("TaskInicial2"),
    Task("TaskInicial3"),
  ];

  useEffect(() => {
    setList(handleInitialItems);
  }, []);

  useEffect(() => {
    console.log("🚀 ~ file: index.js ~ line 10 ~ FormContainer ~ list", list);
  }, [list]);

  // Creacion de funciones que alteran el estado

  const addTask = (task) => {
    list.some((item) => item.title === task.title)
      ? alert("Ingresa una tarea unica")
      : setList([...list, task]);
  };

  // Fin de funciones que alteran el estado

  const handleAddingItem = (toDoNew) => {
    addTask(toDoNew);
  };

  return (
    <div className="container">
      <Form list={list} handleAddingItem={handleAddingItem} Task={Task} />
    </div>
  );
}
