import React from "react";
import "./MyInput.css";

function MyInput({ setSelectamount, selectamount, handleChange }) {
  return (
    <div className="input-class">
      <input type="text" value={selectamount} onChange={handleChange} />
    </div>
  );
}

export default MyInput;
