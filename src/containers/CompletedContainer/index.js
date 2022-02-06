import React from "react";
import CompletedList from "../../components/CompletedList";

export default function CompletedContainer({ list, setList }) {
  return (
    <div>
      <CompletedList list={list} setList={setList} />
    </div>
  );
}
