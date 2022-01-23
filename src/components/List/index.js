import React from "react";

// TODO: Make list expand items, not just display all the array

function List({ toDisplay, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <>{toDisplay}</>
    </div>
  );
}

export default List;

// Al hacer click al Button agregar un item a la lista de items
// Agregar junto al item agregado un boton que nos permita borrar el item de la lista
