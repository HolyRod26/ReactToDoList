import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PendingContainer from "./containers/PendingContainer";
import CompletedContainer from "./containers/CompletedContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";

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
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pending" element={<PendingContainer />} />
        <Route path="/completed" element={<CompletedContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
