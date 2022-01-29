import React from "react";
import ListItem from "../ListItem";
import "./index.css";

// TODO: Make list expand items, not just display all the array

export default function List({ list, handleDelete }) {
  const createItems = list.map((item) => (
    <div className="list">
      <ListItem
        key={item.id}
        title={item.title}
        onClick={() => handleDelete(item)}
      />
    </div>
  ));
  return <div>{createItems}</div>;
}
