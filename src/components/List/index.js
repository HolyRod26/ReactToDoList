import React from "react";
import Button from "../Button";

// TODO: Make list expand items, not just display all the array

function List({ toDisplay }) {
  const listItems = toDisplay.map((item, index) => (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <li>{item}</li> <Button label="X" />
    </div>
  ));

  return <ul>{listItems}</ul>;
}

export default List;

// Al hacer click al Button agregar un item a la lista de items
// TODO: Agregar junto al item agregado un boton que nos permita borrar el item de la lista
