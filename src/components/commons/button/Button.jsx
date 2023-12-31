import React from "react";
import "./Button.css";

function Button({ color, size, text }) {
  return (
    <div className="my-btn" style={{ color: color, fontSize: size }}>
      <p>{text}</p>
    </div>
  );
}

export default Button;
