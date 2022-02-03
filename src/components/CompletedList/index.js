import React from "react";
import ListItem from "../ListItem";
import "./index.css";

// TODO: Make list expand items, not just display all the array

export default function CompletedList({ list, setList }) {
  const handleDelete = (itemToDelete) => {
    const result = window.confirm(
      "Are you sure you want to delete this task?..."
    );
    if (result) return deleteTask(itemToDelete);
  };

  const deleteTask = (itemToDelete) => {
    setList(list.filter((item) => item.id !== itemToDelete.id));
  };

  const handleCompleted = (completedTask) => {
    let newList = list.map((item) => {
      if (item.id === completedTask.id) {
        return { ...item, done: !completedTask.done };
      }
      return item;
    });
    console.log("🚀 ~ file: index.js ~ line 59 ~ newList ~ newList", newList);

    setList([...newList]);
  };

  const createItems = list.map((item) => {
    if (item.done === true) {
      return (
        <>
          <ListItem
            key={item.id}
            title={item.title}
            done={item.done}
            handleDelete={() => handleDelete(item)}
            handleCompleted={() => handleCompleted(item)}
          />
        </>
      );
    }
  });

  return <div>{createItems}</div>;
}

// TODO: Refactorizar item.title usando desestructuracion
/**
 * 
 const createItems = list.map((item) => (
    <div className="list">
      <ListItem
        key={item.id}
        title={item.title}
        completed={item.completed}
        handleCompleted={item.handleCompleted}
        handleDelete={() => handleDelete(item)}
        handleCompleted={() => handleCompleted(item)}
      />
    </div>
  ));
 */
