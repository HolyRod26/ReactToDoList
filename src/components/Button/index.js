import React from "react";
import "./button-add.css";

export default function Button({ onClick, label, inputType }) {
  return (
    <button
      style={{ margin: "1rem" }}
      onClick={onClick}
      type={inputType === 1 ? "submit" : "button"}
      className="button-add"
    >
      {label}
    </button>
  );
}
