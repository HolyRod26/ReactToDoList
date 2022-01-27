import React from "react";
import ListItem from "../ListItem";

// TODO: Make list expand items, not just display all the array

function List({ list, setList, handleDelete }) {
  const listItems = list.map((item) => (
    <div className="list">
      <ListItem content={item} onClick={() => handleDelete(item)} />
    </div>
  ));

  return listItems;
}

export default List;

// TODO: Add key to each list item, ask why key={Math.random().toString(36).slice(2)} does not work
