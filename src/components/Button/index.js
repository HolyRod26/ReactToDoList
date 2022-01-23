import React from "react";

export default function Button({ onClick, label }) {
  return (
    <button style={{ margin: "1rem" }} onClick={onClick}>
      {label}
    </button>
  );
}
