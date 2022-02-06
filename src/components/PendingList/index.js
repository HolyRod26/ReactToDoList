import React from "react";
import ListItem from "../ListItem";
import "./index.css";

// TODO: Make list expand items, not just display all the array

export default function PendingList({ list, setList }) {
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
    const { done, id, title } = item;
    if (done === false) {
      return (
        <>
          <ListItem
            key={id}
            title={title}
            done={done}
            handleDelete={() => handleDelete(item)}
            handleCompleted={() => handleCompleted(item)}
          />
        </>
      );
    }
    return <></>;
  });

  return <div className="list">{createItems}</div>;
}
