import React from "react";
import PendingList from "../../components/PendingList";

export default function PendingContainer({ list, setList }) {
  return (
    <div>
      <PendingList list={list} setList={setList} />
    </div>
  );
}
