import React from "react";
import "./App.css";
import FormContainer from "./components/FormContainer";

/* 
  Make sure you use the hooks ‘useState’ and ‘useEffect’ Done
  Initial list of To-dos should be 5 To-dos on the ‘componentDidMount’ equivalent for hooks: Done
  When you click on delete button, show an alert asking if you really want to delete the item, if the user press ‘cancel’ the alert is closed and the item will still there, but if the user press ‘confirm’ the item will be removed
  Use ‘Children’ API from React
  Use PropTypes 
*/
function App() {
  return (
    <div className="App">
      <FormContainer />
    </div>
  );
}

export default App;
