import React from "react";
import ListItem from "../ListItem";

// TODO: Make list expand items, not just display all the array

function List({ toDisplay, handleDelete }) {
  const listItems = toDisplay.map((item) => (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <ListItem content={item} onClick={() => handleDelete(item)} />
    </div>
  ));

  return <ul>{listItems}</ul>;
}

export default List;

// Al hacer click al Button agregar un item a la lista de items
// TODO: Agregar funcionalidad al boton para borrar el ListItem
// TODO: Add key to each list item, ask why key={Math.random().toString(36).slice(2)} does not work
