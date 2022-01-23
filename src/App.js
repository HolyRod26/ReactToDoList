import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import Input from "./components/Input";
import Button from "./components/Button";

/* 
  Make sure you use the hooks ‘useState’ and ‘useEffect’
  Initial list of To-dos should be 5 To-dos on the ‘componentDidMount’ equivalent for hooks
  When you click on delete button, show an alert asking if you really want to delete the item, if the user press ‘cancel’ the alert is closed and the item will still there, but if the user press ‘confirm’ the item will be removed
  Use ‘Children’ API from React
  Use PropTypes 
*/
function App() {
  const [stateList, setStateList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);

  const handleAddingItem = () => {
    setStateList((oldState) => [...oldState, inputValue]);
    setCount(stateList.length);
    console.log("length", stateList.length);
    console.log("Lista de tareas", stateList);
  };

  // To change the state of the inputValue state to add it to the StateList
  const handleChange = (taskValue) => {
    setInputValue(taskValue);
  };

  const handleDelete = (taskValue) => {};

  return (
    <div className="App">
      <h1>Tareas por hacer: {count}</h1>
      <Input handleChange={handleChange} value={inputValue} />
      <Button label="Agregar nueva tarea" onClick={handleAddingItem} />
      <List toDisplay={stateList}></List>
    </div>
  );
}

export default App;
