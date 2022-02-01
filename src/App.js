import React from "react";
import "./App.css";
import FormContainer from "./components/FormContainer";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

/* 
  Make sure you use the hooks ‘useState’ and ‘useEffect’ Done
  Initial list of To-dos should be 5 To-dos on the ‘componentDidMount’ equivalent for hooks: Done
  When you click on delete button, show an alert asking if you really want to delete the item, if the user press ‘cancel’ the alert is closed and the item will still there, but if the user press ‘confirm’ the item will be removed: Done
   from React not yet
  Use PropTypes done

  TODO: Use ‘Children’ API
*/
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <FormContainer />
        <Outlet />
      </div>
    </BrowserRouter>
  );
}

export default App;
