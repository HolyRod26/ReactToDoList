import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import PendingContainer from "./components/PendingContainer";
import CompletedContainer from "./components/CompletedContainer";

export default function Routing() {
  return (
    <Routes>
      <Route exact path={"/"} element={<Home />}></Route>
      <Route path="/pending" element={<PendingContainer />}></Route>
      <Route path="/completed" element={<CompletedContainer />}></Route>
    </Routes>
  );
}
