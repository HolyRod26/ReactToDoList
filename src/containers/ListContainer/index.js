import React from "react";
import PendingContainer from "../PendingContainer";
import CompletedContainer from "../CompletedContainer";

export default function ListContainer({ showCompleted, list, setList }) {
  if (showCompleted)
    return <CompletedContainer list={list} setList={setList} />;
  return <PendingContainer list={list} setList={setList} />;
}
