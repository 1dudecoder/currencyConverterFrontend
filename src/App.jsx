import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { useFetch } from "./hooks";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
