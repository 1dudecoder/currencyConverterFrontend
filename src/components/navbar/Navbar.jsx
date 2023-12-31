import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import Button from "../commons/button/Button";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <img src={logo} alt="logo" height={50} width={55} />
      </div>
      <div className="nav-buttons">
        <p>Home</p>
        <p>Contact</p>
        <p>About</p>
      </div>
      <div className="nav-soucecode">
        <Button size={20} text={"Soure_Code"} />
      </div>
    </div>
  );
}

export default Navbar;
