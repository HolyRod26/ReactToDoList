import FormContainer from "../FormContainer";
import "./index.css";

import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";
import ListContainer from "../ListContainer";

export default function Home() {
  const [list, setList] = useState([]);
  const [isCompletedOn, setIsCompletedOn] = useState(false);

  const Task = (title = "No title...", done = false) => {
    return { title, done, id: uuidv4() };
  };

  const handleInitialItems = [
    Task("TaskInicial1 Completed", true),
    Task("TaskInicial2"),
    Task("TaskInicial3"),
  ];

  const setTasks = () => {
    setList(handleInitialItems);
  };

  useEffect(setTasks);

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

  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname === "/completed") {
      setIsCompletedOn(true);
    } else {
      setIsCompletedOn(false);
    }
  }, [pathname]);

  return (
    <div className="main-container">
      <FormContainer
        list={list}
        Task={Task}
        handleAddingItem={handleAddingItem}
      />
      <ListContainer
        showCompleted={isCompletedOn}
        list={list}
        setList={setList}
      />
    </div>
  );
}
