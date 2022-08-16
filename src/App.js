import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Dictionary</h1>
      <Dictionary />
      <footer>
        {" "}
        <a
          className="footer-link"
          href="https://github.com/NayoBaez/React-Dictionary-Project"
          target="blank"
        >
          Open-source Code
        </a>{" "}
        <span>by Naomi </span>
      </footer>
    </div>
  );
}

export default App;
