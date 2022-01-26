import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";
import Button from "./components/Button";
import Form from "./components/Form";

/* 
  Make sure you use the hooks ‘useState’ and ‘useEffect’
  Initial list of To-dos should be 5 To-dos on the ‘componentDidMount’ equivalent for hooks: Done
  When you click on delete button, show an alert asking if you really want to delete the item, if the user press ‘cancel’ the alert is closed and the item will still there, but if the user press ‘confirm’ the item will be removed
  Use ‘Children’ API from React
  Use PropTypes 
*/
function App() {
  const [stateList, setStateList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setStateList([
      "Item 1 Effect",
      "Item 2 Effect",
      "Item 3 Effect",
      "Item 4 Effect",
      "Item 5 Effect",
    ]);
  }, []);

  useEffect(() => {
    setCount(stateList.length);
  }, [stateList.length]);

  const handleAddingItem = () => {
    setStateList((oldState) => [...oldState, inputValue]);
    console.log(inputValue);
    console.log("Lista de tareas", stateList);
  };

  // To change the state of the inputValue state to add it to the StateList
  const handleChange = (taskToSave) => {
    setInputValue(taskToSave);
    // console.log(inputValue);
    // console.log(inputValue);
  };

  const handleDelete = (taskValue) => {
    setStateList((oldState) => oldState.filter((item) => item !== taskValue));
  };

  return (
    <div className="App">
      <h1>Tareas por hacer: {count}</h1>
      <Form />
    </div>
  );
}

export default App;
