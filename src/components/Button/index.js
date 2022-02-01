import React from "react";
import PropTypes from "prop-types";
import "./index.css";

export default function Button({ onClick, label, type }) {
  return (
    <button
      style={{ margin: "1rem" }}
      onClick={onClick}
      type={type}
      className="button-add"
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  isSubmit: PropTypes.bool,
  label: PropTypes.string,
};
